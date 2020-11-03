import {
  FiArchive,
  FiHome,
  FiPlayCircle,
  FiShoppingCart,
} from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { StyledListItemsNavigation } from "./Atoms/elements";
import LinkButton from "./Atoms/LinkButton";

const Navigation = () => {
  return (
    <StyledListItemsNavigation>
      <LinkButton href="/home" icon={FiHome} />
      <LinkButton href="/watch" icon={FiPlayCircle} />
      <LinkButton href="/" icon={FiArchive} />
      <LinkButton href="/" icon={FiShoppingCart} notifications={4} />
      <LinkButton href="/" icon={BsPeopleFill} notifications={25} />
    </StyledListItemsNavigation>
  );
};

export default Navigation;
