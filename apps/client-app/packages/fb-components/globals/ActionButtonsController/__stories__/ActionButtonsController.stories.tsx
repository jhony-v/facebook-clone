import { Meta } from "@storybook/react/types-6-0";
import ActionButtonsController from "..";

export default {
  title: "Globals/ActionButtonsController",
  component: ActionButtonsController
} as Meta;

export const Button = () => (
  <ActionButtonsController.Button text="Button controller" />
);

export const Input = () => (
  <ActionButtonsController.Input placeholder="Input controller" />
);
