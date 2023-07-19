import { useReducer } from "react";
import { MainContext, initialState } from "@/store";
import { mainReducer } from "@/store/reducers";
import DefaultLayout from "@/layouts";
import "@/scss/globals.scss";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </MainContext.Provider>
  );
}
