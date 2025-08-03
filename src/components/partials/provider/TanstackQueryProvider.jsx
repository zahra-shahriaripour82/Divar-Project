import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line
const queryClient = new QueryClient({
  // we use this for better performance
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount:false,
retry:1,
staleTime:60*1000,

    }
  }
});
function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}
    
    </QueryClientProvider>
  );
}

export default TanstackQueryProvider;
