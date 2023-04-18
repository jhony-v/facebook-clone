import DropdownTabOptionsAnimatable from "@fb-components/globals/DropdownTabOptionsAnimatable";
import { IoIosSettings } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { WrapperModalOptions } from "./Atoms/elements";
import HeaderSubItem from "./Atoms/HeaderSubItem";
import ItemButtonSelectable from "./Atoms/ItemButtonSelectable";
import LinksPrivacity from "./Atoms/LinksPrivacity";
import ProfileAccountButtonPreview from "./Molecules/ProfileAccountButtonPreview";

const ModalMoreOptionsAccount = () => (
  <WrapperModalOptions>
    <DropdownTabOptionsAnimatable w="100%" initialId="options">
      <DropdownTabOptionsAnimatable.Item id="options">
        {({ onSelectId }) => (
          <>
            <ProfileAccountButtonPreview />
            <ItemButtonSelectable
              icon={BsMoon}
              onClick={() => onSelectId("options-theme")}
            >
              Display preferences
            </ItemButtonSelectable>
            <ItemButtonSelectable
              icon={AiFillQuestionCircle}
              onClick={() => null}
            >
              Help and support
            </ItemButtonSelectable>
            <ItemButtonSelectable icon={IoIosSettings} onClick={() => null}>
              Settings and privacity
            </ItemButtonSelectable>
            <ItemButtonSelectable icon={RiLogoutBoxRFill} onClick={() => null}>
              Logout
            </ItemButtonSelectable>
            <LinksPrivacity />
          </>
        )}
      </DropdownTabOptionsAnimatable.Item>
      <DropdownTabOptionsAnimatable.Item id="options-theme">
        {({ onSelectId }) => (
          <HeaderSubItem
            onBack={() => onSelectId("options")}
            title="Display preferences"
          >
            <ItemButtonSelectable
              icon={AiFillQuestionCircle}
              onClick={() => null}
              hideNextArrow
            >
              Help and support
            </ItemButtonSelectable>
            <ItemButtonSelectable
              icon={IoIosSettings}
              onClick={() => null}
              hideNextArrow
            >
              Settings and privacity
            </ItemButtonSelectable>
            <ItemButtonSelectable
              icon={RiLogoutBoxRFill}
              onClick={() => null}
              hideNextArrow
            >
              Logout
            </ItemButtonSelectable>
          </HeaderSubItem>
        )}
      </DropdownTabOptionsAnimatable.Item>
    </DropdownTabOptionsAnimatable>
  </WrapperModalOptions>
);

export default ModalMoreOptionsAccount;
