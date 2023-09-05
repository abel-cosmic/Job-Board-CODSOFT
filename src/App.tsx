import { Flowbite } from "flowbite-react";
import router from "./lib/router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Flowbite>
        <RouterProvider router={router} />
      </Flowbite>
    </QueryClientProvider>
  );
};

export default App;
