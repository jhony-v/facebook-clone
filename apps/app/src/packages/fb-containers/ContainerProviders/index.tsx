"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@fb-components/application/GlobalStyles";
import "@fb-services/routerEvents/NProgressChangeRoute";
import { RecoilRoot } from "recoil";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

const ContainerProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </StyledComponentsRegistry>
  );
};

export default ContainerProviders;
