import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import useToggle from "../../../../hooks/useToggle";
import { styled } from "../../../../lib/stitches.config";
import { filterDetailInformationIdAtom, textFilterInformationAtom } from "../../../../stores/searchDetailInformation";
import BaseButtonAvatarAction from "../../../../ui/BaseButtonAvatarAction";
import BaseModal from "../../../../ui/BaseModal";
import PressableOverlay from "../../../../ui/PressableOverlay";
import TetraText from "../../../../ui/TetraText";


const InputEngineWrapper = styled("div", {
  backgroundColor: "$button",
  borderRadius: 10,
  flex: 1,
  marginRight: 20,
  display: "flex",
  alignItems: "center",
  padding : 10,
  "& input": {
    marginLeft: 10,
    width : "100%",
    color : "inherit"
  },
  "@min2" : {
    padding: 15,
  }
});


const PressableOverlayArticleItem = styled(PressableOverlay, {
  display: "flex",
  alignItems: "center",
});

const ListOfResultArticlesWrapper = styled("div", {
  overflowY : "auto",
  px : 10,
  my : 10,
  "@min2" : {
    marginRight : 60,
    maxHeight : "400px",
  }
})


const OptionResultItem = ({ text } : {text: string}) => (
  <PressableOverlayArticleItem hoverable="true" spacing="medium" >
    <BaseButtonAvatarAction icon={FiSearch} />
    <TetraText css={{marginLeft:15}}>{text}</TetraText>
  </PressableOverlayArticleItem>
)


const HelpCenterButtonSearchTopics = () => {
  const { active : open, onToggle } = useToggle();
  const [ textFilter, setTextFilter ] = useAtom(textFilterInformationAtom);
  const filterDetailInformation = useAtomValue(filterDetailInformationIdAtom);
  const refSearchModal = useRef<HTMLDivElement>(null);


  const getOnlySixItems = [...filterDetailInformation].slice(0, 6);
  const isEmptyResultItems = getOnlySixItems.length === 0;

  const handleOnKeyUpArticles = (event : React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setTextFilter(target.value);
  }

  useClickOutside(refSearchModal, onToggle);
 
  return (
    <div>
      <BaseButtonAvatarAction
        variant="secondary"
        icon={FiSearch}
        onClick={onToggle}
      />
      {open && (
        <BaseModal size="medium" refModal={refSearchModal}>
          <BaseModal.Header onClose={onToggle}>
            <InputEngineWrapper>
              <FiSearch size={20} />
              <input autoFocus placeholder="Search help articles..." onKeyUp={handleOnKeyUpArticles} />
            </InputEngineWrapper>
          </BaseModal.Header>
          <BaseModal.Body>
            <ListOfResultArticlesWrapper>
              {
                isEmptyResultItems 
                ? <OptionResultItem text={textFilter} />
                : getOnlySixItems.map(item => <OptionResultItem key={item.id} text={item.text} />)
              }
            </ListOfResultArticlesWrapper>
          </BaseModal.Body>
        </BaseModal>
      )}
    </div>
  );
};

export default HelpCenterButtonSearchTopics;
