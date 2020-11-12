import { FiArchive, FiHome } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { StyledListItemsNavigation } from "./Atoms/elements";
import LinkButton from "./Atoms/LinkButton";

const Navigation = () => {
  return (
    <StyledListItemsNavigation>
      <LinkButton href="/" icon={FiHome} />
      <LinkButton href="/watch" icon={MdOndemandVideo} />
      <LinkButton href="/marketplace" icon={RiStore2Line} notifications={4} />
      <LinkButton href="/gaming" icon={FiArchive} />
      <LinkButton href="/groups" icon={FaUsers} notifications={25} />
    </StyledListItemsNavigation>
  );
};

export default Navigation;
