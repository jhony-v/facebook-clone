import clsx from "clsx";
import { FC } from "react";
import { css } from "../lib/stitches.config";
import BaseButton from "./BaseButton";

const circleButton = css({
  borderRadius: "100%",
  size: "40px",
  padding: "0px",
  alignment: "center",
  flex : "none",
});

interface BaseButtonAvatarActionProps
  extends React.ComponentProps<typeof BaseButton> {}

const BaseButtonAvatarAction: FC<BaseButtonAvatarActionProps> = ({
  children,
  className,
  ...restProps
}) => {
  const classNamesButton = clsx(circleButton().toString(), className?.toString());
  return (
    <BaseButton {...restProps} className={classNamesButton}>
      {children}
    </BaseButton>
  );
};

export default BaseButtonAvatarAction;
