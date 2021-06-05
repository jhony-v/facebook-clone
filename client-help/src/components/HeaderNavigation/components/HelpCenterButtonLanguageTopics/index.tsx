import { useRef } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import useToggle from "../../../../hooks/useToggle";
import { styled } from "../../../../lib/stitches.config";
import BaseButton from "../../../../ui/BaseButton";
import BaseModal from "../../../../ui/BaseModal";
import BaseText from "../../../../ui/BaseText";

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

const InputEngineLanguages = styled("input", {
  padding: 17,
  borderRadius: 5,
  border: "1px solid $button",
  color: "$text",
  width : "100%",
  boxSizing  :"border-box",
  marginBottom : 40,
  fontSize : "1em",
  "&:focus" : {
      borderColor : "$primary",
  }
});

const HelpCenterButtonLanguageTopics = () => {
  const { active: open, onToggle } = useToggle();
  const refModal = useRef();

  useClickOutside(refModal, onToggle);

  return (
    <div>
      <BaseButton variant="secondary" onClick={onToggle}>
        English(US)
      </BaseButton>
      {open && (
        <BaseModal refModal={refModal}>
          <BaseModal.Header onClose={onToggle}>
            <ModalHeaderTitle>
              <BaseText weight size="large">
                Select Your Language
              </BaseText>
            </ModalHeaderTitle>
          </BaseModal.Header>
          <BaseModal.Body>
            <ModalBodySpacing>
              <InputEngineLanguages placeholder="Search languages..." />
              <ModalFooterOptions>
                <BaseButton variant="secondary" onClick={onToggle}>
                  Cancel
                </BaseButton>
                <BaseButton variant="primary">Save changes</BaseButton>
              </ModalFooterOptions>
            </ModalBodySpacing>
          </BaseModal.Body>
        </BaseModal>
      )}
    </div>
  );
};

export default HelpCenterButtonLanguageTopics;
