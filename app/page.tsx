import CreateTodo from "@/app/components/CreateTodo";
import TodoLayout from "@/app/components/TodoLayout";
import { findTodos } from "@/app/lib/todos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: findTodos,
  });
  // 请求Api
  return (
    <div className="flex gap-6 p-5">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoLayout />
      </HydrationBoundary>
      <CreateTodo />
    </div>
  );
}
