import { FiShare } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { RiThumbUpLine } from "react-icons/ri";
import Wrapper from "@fb-components/common/Wrapper";
import ActionButtonsController from "../../ActionButtonsController";

const NewsOptions = () => (
  <Wrapper p="3px 10px">
    <ActionButtonsController repeatColumns={3}>
      <ActionButtonsController.Button
        text="Like"
        colorIcon="gray"
        icon={RiThumbUpLine}
      />
      <ActionButtonsController.Button
        text="Comment"
        colorIcon="gray"
        icon={GoComment}
      />
      <ActionButtonsController.Button
        text="Share"
        colorIcon="gray"
        icon={FiShare}
      />
    </ActionButtonsController>
  </Wrapper>
);

export default NewsOptions;
