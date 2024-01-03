import { FCWithChildren } from "@utils/types";
import Head from "next/head";

const RootConfigLayout: FCWithChildren = ({ children }) => (
  <>
    <Head>
      <meta name="theme-color" color="white" />
    </Head>
    {children}
  </>
);

export default RootConfigLayout;
