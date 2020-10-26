import React from "react";
import { FiShare } from "react-icons/fi";
import ActionButtonsController from "../../ActionButtonsController";
import Wrapper from "../../Common/Wrapper";
import { GoComment } from "react-icons/go";
import { RiThumbUpLine } from "react-icons/ri";

const NewsOptions = () => {
  return (
    <Wrapper p="3px 10px"> 
      <ActionButtonsController repeatColumns={3}>
        <ActionButtonsController.Button text="Like" colorIcon="gray" icon={RiThumbUpLine} />
        <ActionButtonsController.Button text="Comment" colorIcon="gray" icon={GoComment} />
        <ActionButtonsController.Button text="Share" colorIcon="gray" icon={FiShare} />
      </ActionButtonsController>
    </Wrapper>
  );
};

export default NewsOptions;
