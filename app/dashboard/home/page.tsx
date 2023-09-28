import HomeComponent from "@/components/HomeComponent";
import Loading from "@/components/Loading";
import { Suspense } from "react";
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeComponent />
    </Suspense>
  );
}
