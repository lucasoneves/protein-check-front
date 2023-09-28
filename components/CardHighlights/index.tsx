"use client";
import { Card } from "../Card";
import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";
import { MdOutlineSettings, MdOutlineVerified } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CardHighlights() {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  const totalToday = userInfo.proteinAmount.reduce(
    (acc, item) => acc + item.quantity!,
    0
  );
  const isTargetCreated = userInfo.proteinTarget.length;
  const totalTarget = isTargetCreated ? userInfo.proteinTarget[0].target : 0;
  const totalPercentage = (totalToday * 100) / totalTarget;

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname)
  })

  function proteinTarget() {
    return `${totalTarget}g`;
  }

  function proteinAmountToday() {
    return `${totalToday}g`;
  }

  function proteinPercentageToday() {
    if (totalTarget === 0) {
      return `${0}%`;
    }

    return `${totalPercentage <= 100 ? totalPercentage.toFixed(0) : 100}%`;
  }
  return (
    <>
      <Card className="col-span-2 row-span-2 flex items-center justify-center">
        <h3 className="flex items-center justify-center flex-col text-sm">
          Today:{" "}
          <span className="sm:text-6xl text-3xl block font-bold">
            {proteinAmountToday()}
          </span>
        </h3>
      </Card>
      <Card className="sm:p-8 p-12 flex relative items-center justify-center">
        <h3 className="flex items-center justify-center flex-col text-sm">
          Your daily goal:{" "}
          <span className="text-2xl block font-bold">{proteinTarget()}</span>
        </h3>
        <Link href={`/dashboard/update-target`} className="absolute top-3 block right-3"><MdOutlineSettings /></Link>
      </Card>
      {totalPercentage >= 100 ? (
        <Card
          className="card-target text-sm flex justify-center items-center flex-col gap-2 text-center"
          success
        >
          <MdOutlineVerified fontSize={30} />
          <strong>Parabéns!</strong> Você atingiu sua meta diária!
        </Card>
      ) : (
        <Card className="sm:p-8 p-12">
          <h3 className="flex items-center justify-center flex-col text-sm">
            Progress:{" "}
            <span className="text-2xl block font-bold">
              {proteinPercentageToday()}
            </span>
          </h3>
          <div className="w-full h-3 bg-gray-500 rounded-lg overflow-hidden">
            <span
              className=" bg-cyan-500 h-3 max-w-full block rounded-lg rounded-r-none"
              style={{ width: proteinPercentageToday() }}
            ></span>
          </div>
        </Card>
      )}
    </>
  );
}
