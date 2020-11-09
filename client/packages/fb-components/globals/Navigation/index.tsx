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
      <LinkButton href="/" icon={FiHome} />
      <LinkButton href="/watch" icon={FiPlayCircle} />
      <LinkButton href="/games" icon={FiArchive} />
      <LinkButton href="/marketplace" icon={FiShoppingCart} notifications={4} />
      <LinkButton href="/groups" icon={BsPeopleFill} notifications={25} />
    </StyledListItemsNavigation>
  );
};

export default Navigation;
