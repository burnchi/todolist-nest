"use client";
import TodoCard from "@/app/components/TodoCard";
import { findTodos } from "@/app/lib/todos";
import { useQuery } from "@tanstack/react-query";

const TodoLayout = () => {
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: findTodos,
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  // console.log(todos);
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo: any) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoLayout;
