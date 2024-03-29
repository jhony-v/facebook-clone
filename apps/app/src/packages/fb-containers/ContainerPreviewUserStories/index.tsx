import PreviewStories from "@fb-components/globals/PreviewStories";
import HistoryUserItem from "@fb-components/globals/PreviewStories/Atoms/HistoryUserItem";
import { useGetPreviewUserStories } from "@fb-features-recoil/userStories";
import { faker } from "@faker-js/faker";

const ContainerPreviewUserStories = () => {
  const { data } = useGetPreviewUserStories();
  return (
    <PreviewStories
      data={data}
      userAddController={
        <HistoryUserItem
          username={faker.person.firstName()}
          avatar={faker.image.urlLoremFlickr({ category: "people" })}
        />
      }
    >
      {(current, index) => <PreviewStories.Item key={index} {...current} />}
    </PreviewStories>
  );
};

export default ContainerPreviewUserStories;
