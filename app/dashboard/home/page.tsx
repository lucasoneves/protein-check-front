import HomeComponent from "@/app/components/HomeComponent";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeComponent />
    </Suspense>
  );
}
