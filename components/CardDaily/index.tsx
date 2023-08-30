import { ReactEventHandler, ReactNode } from "react";
import { Card } from "../Card";

import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
function CardDaily({
  createdAt,
  amount,
  handleEdit,
  handleDelete,
  id,
}: {
  createdAt: string;
  amount: number;
  handleEdit: ReactEventHandler<Element>;
  handleDelete: ReactEventHandler<Element>;
  id: number;
}) {
  return (
    <Card className="card-amount h-16 flex items-center justify-between">
      <div className={`flex gap-6 rounded-md text-sm w-full`}>
        <span>{createdAt}</span>
        <span className="flex-1">{amount}g</span>
        <div className="actions flex gap-4 text-xl">
          <button onClick={handleEdit} className="flex gap-1">
            {" "}
            <MdOutlineModeEditOutline />{" "}
          </button>
          <button onClick={handleDelete} className="flex gap-1">
            {" "}
            <MdDeleteOutline />{" "}
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CardDaily;
