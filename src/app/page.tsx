import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./Client";

const Page = async () => {
  
  const queryClient = getQueryClient();
  void await queryClient.prefetchQuery(trpc.hello.queryOptions({text: "Test"}));

  return ( 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading...</p>}>
        <Client/>
      </Suspense>
    </HydrationBoundary>
   );
}
export default Page;
