import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { styled } from "../../../../lib/stitches.config";
import BaseButtonAvatarAction from "../../../../ui/BaseButtonAvatarAction";
import BaseModal from "../../../../ui/BaseModal";

const InputEngineWrapper = styled("div", {
  backgroundColor: "$button",
  borderRadius: 10,
  flex: 1,
  marginRight: 20,
  padding: 15,
  display: "flex",
  alignItems: "center",
  "& input": {
    marginLeft: 10,
    width : "100%",
  },
});

const HelpCenterButtonSearchTopics = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <BaseButtonAvatarAction
        variant="secondary"
        icon={FiSearch}
        onClick={() => setOpen(true)}
      />
      {open && (
        <BaseModal size="medium">
          <BaseModal.Header onClose={() => setOpen(false)}>
            <InputEngineWrapper>
              <FiSearch />
              <input placeholder="Search help articles..." />
            </InputEngineWrapper>
          </BaseModal.Header>
          <BaseModal.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            cum perspiciatis iusto iure ratione, quae nihil recusandae, voluptas
            maxime accusamus veniam cupiditate sit ipsum quidem! Dolorum ipsa
            non delectus quaerat?
          </BaseModal.Body>
        </BaseModal>
      )}
    </div>
  );
};

export default HelpCenterButtonSearchTopics;
