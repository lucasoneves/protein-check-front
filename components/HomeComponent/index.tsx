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

export default function HomeComponent() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  async function getDataUser() {
    
    try {
      const response = await getUserData(Cookies.get("authToken")!);
      const user = await response.data[0];
      dispatch(setUserInfo(user));
      return response;
    } catch (error) {
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
      )}
    </>
  );
}
