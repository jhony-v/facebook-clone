import { FC, PropsWithChildren } from "react";
import { themeAtom } from "../../stores/theme.store";
import { useAtomValue } from "jotai";
import clsx from "clsx";
import { styled } from "../../lib/stitches.config";

const Wrapper = styled("div", {
  background: "$bg",
  position: "relative",
  width: "100%",
  height: "100%"
});

const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAtomValue(themeAtom);
  const wrapperClassnames = clsx(theme.toString(), "app");
  return <Wrapper className={wrapperClassnames}>{children}</Wrapper>;
};

export default AppContainer;
