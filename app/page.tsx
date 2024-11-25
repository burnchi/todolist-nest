import CreateTodo from "@/app/components/CreateTodo";
import TodoLayout from "@/app/components/TodoLayout";

export default function Home() {
  // 请求Api
  return (
    <div className="flex gap-6 p-5">
      <TodoLayout />
      <CreateTodo />
    </div>
  );
}
