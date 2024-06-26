import { Text, Stack, Flex, Spinner } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";

export type Todo = {
  _id: number;
  body: string;
  completed: boolean;
};

const TodoList = () => {
  const { data: todos, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:4000/api/todos");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data || [];
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Text
        fontSize={"4xl"}
        textTransform={"uppercase"}
        textAlign={"center"}
        my={2}
      >
        Today's To-do
      </Text>
      {isLoading && (
        <Flex justifyContent={"center"} my={4}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {!isLoading && todos?.length === 0 && (
        <Stack>
          <Text>No Tasks !</Text>
        </Stack>
      )}
      {!isLoading && todos?.length !== 0 && (
        <Stack gap={3}>
          {todos?.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default TodoList;
