import React from "react";
import Grid from "@fb-components/common/Grid";
import ActionButtonController from "./Atoms/ActionButtonController";
import ActionInputController from "./Atoms/ActionInputController";

type ActionButtonsControllerProps = {
  children?: React.ReactNode;
  repeatColumns?: number;
};
const ActionButtonsController = ({
  children,
  repeatColumns
}: ActionButtonsControllerProps) => (
  <Grid gap="10px" repeatColumns={repeatColumns}>
    {children}
  </Grid>
);

ActionButtonsController.Button = React.memo(ActionButtonController);
ActionButtonsController.Input = React.memo(ActionInputController);

export default ActionButtonsController;
