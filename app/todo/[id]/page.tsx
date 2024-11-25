import EditTodo from "@/app/components/EditTodo";
import { findTodo } from "@/app/lib/todos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const TodoPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  // 服务器提前请求数据
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos", id],
    queryFn: () => findTodo(id),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditTodo id={id} />
      </HydrationBoundary>
    </div>
  );
};

export default TodoPage;
