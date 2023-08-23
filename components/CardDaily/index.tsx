import { ReactEventHandler } from "react";
import { Card } from "../Card";

function CardDaily({
  createdAt,
  amount,
  id,
  handleEdit,
  handleDelete,
}: {
  createdAt: string;
  amount: number;
  id: number;
  handleEdit: ReactEventHandler<Element>;
  handleDelete: ReactEventHandler<Element>;
}) {
  return (
    <Card className="card-amount">
      <div className={`p-3 flex gap-6 rounded-md text-sm`}>
        <span>{createdAt}</span>
        <span className="flex-1">{amount}g</span>
        <div className="actions flex gap-2 text-xs">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </div>
    </Card>
  );
}

export default CardDaily;
