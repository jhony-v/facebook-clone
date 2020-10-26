import React from "react";
import Grid from "../Common/Grid";
import ActionButtonController from "./Atoms/ActionButtonController";
import ActionInputController from "./Atoms/ActionInputController";

const ActionButtonsController = ({ children, repeatColumns }) => {
  return (
    <Grid gap="10px" repeatColumns={repeatColumns}>
      {children}
    </Grid>
  );
};

ActionButtonsController.Button = ActionButtonController
ActionButtonsController.Input = ActionInputController;

export default ActionButtonsController;
