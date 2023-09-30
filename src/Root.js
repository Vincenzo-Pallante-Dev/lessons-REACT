import { BrowserRouter } from "react-router-dom";
import { AppSeven } from "./AppSeven";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <AppSeven />
      </BrowserRouter>
    </SWRConfig>
  );
}
