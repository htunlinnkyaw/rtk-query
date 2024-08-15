import React from "react";
import Tool from "./components/Tool";
import List from "./components/List";
import { useGetTodoQuery } from "./store/services/endpoints/todo.endpoints";

const App = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useGetTodoQuery();

  console.log(isLoading);

  const handleRefatch = () => {
    refetch();
  };

  return (
    <div className="flex flex-col  mx-auto h-screen mt-20 items-center">
      <Tool handleRefatch={handleRefatch} />
      <List isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;
