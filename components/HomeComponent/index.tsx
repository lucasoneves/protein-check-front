"use client";
import { getUserData } from "@/lib/api";
import Cookies from "js-cookie";
import { setUserInfo } from "@/app/store/userSlice";
import { useAppDispatch } from "@/app/store/hooks";
import CardDailyList from "@/components/CardDailyList";
import CardHighlights from "@/components/CardHighlights";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { MessageFeedBackTypes, MessageType } from "@/lib/types";
import { Card } from "../Card";

export default function HomeComponent() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const router = useRouter();

  async function getDataUser() {
    try {
      const response = await getUserData(Cookies.get("authToken")!);
      const user = await response.data[0];
      dispatch(setUserInfo(user));
      setMessageFeedback({
        type: MessageType.Success,
        message: "",
      });
      return response;
    } catch (error) {
      setMessageFeedback({
        type: MessageType.Error,
        message: "Error loading data. Try again in a moment.",
      });
      console.error("Error trying to load user info", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        messageFeedback.type !== MessageType.Error ? (
          <main>
            <Head>
              <title>My page Title</title>
            </Head>
            <h3 className="mt-5 font-bold">Overview</h3>
            <div className="grid sm:grid-cols-3 auto-cols-fr sm:gap-5 gap-2 mt-5 mb-5">
              <CardHighlights />
            </div>
            <div className="flex justify-between flex-wrap gap-3">
              <div className="report flex-1">
                <h2 className="mt-5 mb-5 font-bold">Today</h2>
                <CardDailyList />
              </div>
            </div>
          </main>
        ) : <Card className="error mt-10 text-sm text-center"><p>Houve um erro ao carregar a página. Tente novamente.</p></Card>
      )}
    </>
  );
}
