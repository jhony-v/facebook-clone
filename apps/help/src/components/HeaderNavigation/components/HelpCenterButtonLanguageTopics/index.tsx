import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import useToggle from "../../../../hooks/useToggle";
import { styled } from "../../../../lib/stitches.config";
import BaseButton from "../../../../ui/BaseButton";
import BaseModal from "../../../../ui/BaseModal";
import BaseText from "../../../../ui/BaseText";
import InputEngineLanguages from "./InputEngineLanguages";

const ModalFooterOptions = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > button + button": {
    marginLeft: 10,
  },
});

const ModalHeaderTitle = styled("div", {
  width: "100%",
  textAlign: "center",
});

const ModalBodySpacing = styled("div", {
  padding: 15,
});


type Language = {
  code : string;
  name : string;
}

const HelpCenterButtonLanguageTopics = () => {
  const { active: open, onToggle } = useToggle();
  const refModal = useRef();
  const [ isSelected, setIsSelected ] = useState(false);
  const [ language, selectLanguage ] = useState<Language>({
    code : "US",
    name : "English"
  });

  const normalizeTextButtonLanguage = `${language.name} (${language.code.toUpperCase()})`

  const onCancel = () => {
    selectLanguage({
      code : "US",
      name : "English"
    })
    setIsSelected(false);
    onToggle();
  }
  const onSelectLanguage = (language : Language) => {
    selectLanguage(language);
    setIsSelected(true);
  }

  const onSaveChanges = () => {
    onToggle();
  }

  const onOpen = () => {
    setIsSelected(false);
    onToggle();
  }

  useClickOutside(refModal, onCancel);



  return (
    <div>
      <BaseButton variant="secondary" onClick={onOpen}>
        {normalizeTextButtonLanguage} 
      </BaseButton>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} 
            transition={{duration:.1}}
          >
            <BaseModal refModal={refModal}>
              <BaseModal.Header onClose={onCancel}>
                <ModalHeaderTitle>
                  <BaseText weight size="large">
                    Select Your Language
                  </BaseText>
                </ModalHeaderTitle>
              </BaseModal.Header>
              <BaseModal.Body>
                <ModalBodySpacing>
                  <InputEngineLanguages onItemLanguageSelected={onSelectLanguage} />
                  <ModalFooterOptions>
                    <BaseButton 
                      variant="secondary" 
                      onClick={onCancel}>
                      Cancel
                    </BaseButton>
                    <BaseButton 
                      disabled={!isSelected} 
                      variant="primary"
                      onClick={onSaveChanges}>
                      Save changes
                    </BaseButton>
                  </ModalFooterOptions>
                </ModalBodySpacing>
              </BaseModal.Body>
            </BaseModal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default HelpCenterButtonLanguageTopics;
