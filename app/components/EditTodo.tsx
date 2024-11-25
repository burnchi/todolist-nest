"use client";
import { findTodo, updateTodo } from "@/app/lib/todos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTodo = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const [input, setinput] = useState("");
  const router = useRouter();
  const { data: todo } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => findTodo(id),
  });

  const { title } = todo;

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleEdit = () => {
    updateTodoMutation.mutate({ id, title: input });
    router.push("/");
  };

  return (
    <div className="space-y-3 w-[300px] p-5 border mx-auto mt-10">
      <input
        type="text"
        placeholder={title}
        className="border"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
        onClick={handleEdit}
      >
        submit
      </button>
    </div>
  );
};

export default EditTodo;
