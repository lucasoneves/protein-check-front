import { ReactEventHandler, ReactNode } from "react";
import { Card } from "../Card";
import { VscEdit, VscTrash } from "react-icons/vsc";

function CardDaily({
  createdAt,
  children,
  amount,
  handleEdit,
  handleDelete,
  id
}: {
  children: ReactNode,
  createdAt: string;
  amount: number;
  handleEdit: ReactEventHandler<Element>;
  handleDelete: ReactEventHandler<Element>;
  id: number
}) {
  return (
    <Card className="card-amount">
      <div className={`p-3 flex gap-6 rounded-md text-sm`}>
        <span>{createdAt}</span>
        {children}
        <div className="actions flex gap-4 text-xl">
          <button onClick={handleEdit} className="flex gap-1"> <VscEdit /> </button>
          <button onClick={handleDelete} className="flex gap-1"> <VscTrash /> </button>
        </div>
      </div>
    </Card>
  );
}

export default CardDaily;
