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

  // console.log(todos);
  return (
    <div className="flex flex-col gap-2">
      {todos && todos?.length !== 0 ? (
        todos.map((todo: any) => <TodoCard key={todo.id} {...todo} />)
      ) : (
        <div className="w-[200px] h-[100px] shadow-md rounded-md flex justify-center items-center">
          No todos found
        </div>
      )}
    </div>
  );
};

export default TodoLayout;
