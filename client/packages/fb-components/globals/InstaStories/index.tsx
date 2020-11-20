import faker from "faker";
import UserDetailStory from "./Atoms/UserDetailStory";
import FooterStory from "./Atoms/FooterStory";
import OverflowCardBackgroundImage from "../../common/OverflowCardBackgroundImage";
import TimerStatusProgressStory from "./Molecules/TimerStatusProgressStory";
import IconsOptionStory from "./Molecules/IconsOptionStory";

const image = faker.random.image();
const fullName = faker.name.firstName();
const text = "Hello from Peru 😀😀😀";

const InstaStories = () => {
  return (
      <OverflowCardBackgroundImage image={image}>
        <UserDetailStory avatar={faker.random.image()} fullName={fullName} datetime="20m"  />
        <IconsOptionStory/>
        <TimerStatusProgressStory />
        <FooterStory text={text} />
      </OverflowCardBackgroundImage>
  );
};

export default InstaStories;
