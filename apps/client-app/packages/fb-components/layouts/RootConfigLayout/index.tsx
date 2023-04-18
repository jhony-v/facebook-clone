import { FCWithChildren } from "@utils/types";
import Head from "next/head";

const RootConfigLayout: FCWithChildren = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
      />
      <meta name="theme-color" color="white" />
    </Head>
    {children}
  </>
);

export default RootConfigLayout;
