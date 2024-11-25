"use client";
import { addTodo } from "@/app/lib/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const CreateTodo = () => {
  const queryClient = useQueryClient();

  const createTopicMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("success bro!");
    },
  });

  const [input, setinput] = useState("");
  const handleSubmit = () => {
    createTopicMutation.mutate({
      title: input,
    });
    setinput("");
  };
  return (
    <div className="w-[300px] h-[200px]  p-5 shadow-md rounded-md space-y-4">
      <h2 className="text-[22px] font-semibold">title</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        className="border"
      />
      <button
        className="py-1 px-3 bg-blue-500 text-white hover:opacity-80 rounded-md block"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
};

export default CreateTodo;
