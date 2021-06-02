import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import BaseButtonAvatarAction from "../../../../ui/BaseButtonAvatarAction";
import BaseModal from "../../../../ui/BaseModal";

const HelpCenterButtonSearchTopics = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <BaseButtonAvatarAction
        variant="secondary"
        icon={FiSearch}
        onClick={() => setOpen(true)}
      />
      {open && <BaseModal>
        <BaseModal.Header onClose={() => setOpen(false)} >
            jhony
        </BaseModal.Header>
        <BaseModal.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum perspiciatis iusto iure ratione, quae nihil recusandae, voluptas maxime accusamus veniam cupiditate sit ipsum quidem! Dolorum ipsa non delectus quaerat?
        </BaseModal.Body>
      </BaseModal>}
    </div>
  );
};

export default HelpCenterButtonSearchTopics;
