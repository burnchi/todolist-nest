"use client";
import { deleteTodo } from "@/app/lib/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TodoCard = ({ title, id }: { title: string; id: number }) => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDelete = () => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className="p-3 w-[300px] h-[100px] shadow-md rounded-md relative">
      <h2 className="text-[26px] font-semibold">{title}</h2>

      <div className="flex items-center gap-3 absolute right-5 top-5">
        <Link href={`/todo/${id}`}>
          <FaRegEdit className="text-green-400" size={24} />
        </Link>
        <button onClick={handleDelete}>
          <MdDeleteOutline className="text-red-500" size={26} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
