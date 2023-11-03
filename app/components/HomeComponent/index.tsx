"use client";
import { getUserData } from "@/app/lib/api";
import Cookies from "js-cookie";
import { setUserInfo } from "@/app/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import CardDailyList from "../CardDailyList";
import CardHighlights from "../CardHighlights";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { MessageFeedBackTypes, MessageType } from "@/app/lib/types";
import { Card } from "../Card";
import getDataUser from "@/app/lib/user";

export default function HomeComponent() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const router = useRouter();

  async function getDataUserInfo() {
    try {
      setIsLoading(true);
      const response = await getDataUser();
      const user = await response.data
      dispatch(setUserInfo(user[0]));
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
    if (!userInfo.id) {
      getDataUserInfo();
    }
  }, [userInfo.id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        messageFeedback.type !== MessageType.Error || userInfo.id ? (
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
        ) : ''
      )}
    </>
  );
}
