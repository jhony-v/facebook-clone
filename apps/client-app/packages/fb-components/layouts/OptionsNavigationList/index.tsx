import faker from "faker";
import StyledNavigationListWrapper from "./Atoms/elements";
import RowItem from "./Atoms/RowItem";
import items from "./items";

const OptionsNavigationList = () => (
  <StyledNavigationListWrapper>
    <RowItem
      text={`${faker.name.firstName()} ${faker.name.lastName()}`}
      image={faker.image.people()}
    />
    {items.map((e, i) => (
      <RowItem key={i} text={e.title} image={`assets/icons/${e.image}`} />
    ))}
  </StyledNavigationListWrapper>
);

export default OptionsNavigationList;
