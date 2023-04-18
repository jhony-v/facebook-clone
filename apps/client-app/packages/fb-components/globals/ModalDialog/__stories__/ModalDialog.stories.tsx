import Wrapper from "@fb-components/common/Wrapper";
import { Meta } from "@storybook/react/types-6-0";
import ModalDialog from "..";

export default {
  title: "Globals/ModalDialog",
  component: ModalDialog
} as Meta;

export const Default = () => (
  <ModalDialog open onClose={() => null}>
    <Wrapper p="80px 20px 20px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
      voluptas dolor assumenda eos saepe temporibus deleniti tenetur quod
      praesentium delectus quae inventore cumque ipsa earum sint iure aperiam
      dolore?
    </Wrapper>
  </ModalDialog>
);
