import { Card } from "../Card";
import { useAppSelector } from "@/app/store/hooks";

export default function CardHighlights() {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  function proteinTarget() {
    if (userInfo.proteinTarget) {
      return `${userInfo.proteinTarget[0].target}g`;
    }
  }

  function proteinAmountToday() {
    return userInfo.proteinAmount.reduce(
      (acc, item) => acc + item.quantity!,
      0
    );
  }
  return (
    <>
      <Card className="col-span-2 row-span-2 flex items-center justify-center">
        <h3 className="flex items-center justify-center flex-col text-sm">
          Today:{" "}
          <span className="sm:text-6xl text-3xl block font-bold">
            {proteinAmountToday()}g
          </span>
        </h3>
      </Card>
      <Card className="sm:p-8 p-12">
        <h3 className="flex items-center justify-center flex-col text-sm">
          Your daily goal:{" "}
          <span className="text-2xl block font-bold">{proteinTarget()}</span>
        </h3>
      </Card>
      <Card className="sm:p-8 p-12">
        <h3 className="flex items-center justify-center flex-col text-sm">
          Progress: <span className="text-2xl block font-bold">50%</span>
        </h3>
      </Card>
    </>
  );
}
