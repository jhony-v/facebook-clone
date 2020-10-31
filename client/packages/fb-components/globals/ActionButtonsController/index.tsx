import React from "react";
import Grid from "@fb-components/Grid";
import ActionButtonController from "./Atoms/ActionButtonController";
import ActionInputController from "./Atoms/ActionInputController";

type ActionButtonsControllerProps = {
  children ?: React.ReactNode;
  repeatColumns ?: number
}
const ActionButtonsController = ({ children, repeatColumns } : ActionButtonsControllerProps) => {
  return (
    <Grid gap="10px" repeatColumns={repeatColumns}>
      {children}
    </Grid>
  );
};

ActionButtonsController.Button = ActionButtonController
ActionButtonsController.Input = ActionInputController;

export default ActionButtonsController;
