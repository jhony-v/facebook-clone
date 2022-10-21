import { FiArchive, FiHome } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { StyledListItemsNavigation } from "./Atoms/elements";
import LinkButton from "./Atoms/LinkButton";

const Navigation = () => (
  <StyledListItemsNavigation>
    <LinkButton href="/" icon={FiHome} title="Home" />
    <LinkButton href="/watch" icon={MdOndemandVideo} title="Watch" />
    <LinkButton
      href="/marketplace"
      icon={RiStore2Line}
      notifications={4}
      title="Marketplace"
    />
    <LinkButton
      href="/groups"
      icon={FaUsers}
      notifications={25}
      title="Groups"
    />
    <LinkButton href="/gaming" icon={FiArchive} title="Gaming" />
  </StyledListItemsNavigation>
);

export default Navigation;
