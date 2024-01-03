import { faker } from "@faker-js/faker";
import StyledNavigationListWrapper from "./Atoms/elements";
import RowItem from "./Atoms/RowItem";
import items from "./items";

const OptionsNavigationList = () => (
  <StyledNavigationListWrapper>
    <RowItem
      text={`${faker.person.firstName()} ${faker.person.lastName()}`}
      image={faker.image.urlLoremFlickr({ category: "people" })}
    />
    {items.map((e, i) => (
      <RowItem key={i} text={e.title} image={`assets/icons/${e.image}`} />
    ))}
  </StyledNavigationListWrapper>
);

export default OptionsNavigationList;
