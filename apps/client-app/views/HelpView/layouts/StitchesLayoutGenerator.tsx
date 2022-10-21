import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { getCssString } from "../config/stitches.config";

const StitchesLayoutGenerator: FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <Head>
      <style
        id="stitches"
        dangerouslySetInnerHTML={{ __html: getCssString() }}
      />
    </Head>
    {children}
  </>
);

export default StitchesLayoutGenerator;
