import { IconType } from "react-icons";
import { FiSearch } from "react-icons/fi";
import { styled } from "../../../lib/stitches.config";
import BaseButtonAvatarAction from "../../../ui/BaseButtonAvatarAction";
import BaseText from "../../../ui/BaseText";
import TetraText from "../../../ui/TetraText";

const PressableOverlayWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  py : "6px",
});

const TextWrapper = styled("div", {
  marginLeft: "10px",
});

const TextCategoryWrapper = styled("div", {
  marginTop: "5px",
});

type ResultSearchedItemInformationProps = {
  item: {
    icon: IconType;
    text: string;
    id: string;
    categoryId: string;
  };
};
const ResultSearchedItemInformation = (
  props: ResultSearchedItemInformationProps
) => {
  const { item } = props;
  return (
    <PressableOverlayWrapper>
      <BaseButtonAvatarAction icon={FiSearch} />
      <TextWrapper>
        <TetraText>
          {item.text}
        </TetraText>
        <TextCategoryWrapper>
          <BaseText size="small" color="secondary">{item.categoryId}</BaseText>
        </TextCategoryWrapper>
      </TextWrapper>
    </PressableOverlayWrapper>
  );
};

export default ResultSearchedItemInformation;
