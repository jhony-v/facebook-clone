import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import FlexWrapper from "@fb-components/FlexWrapper";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import PreviewStreamByUserProfileCard from "@fb-components/PreviewStreamByUserProfileCard";

const GamingView = () => {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
        <FlexWrapper flexDirection="column">
          <PreviewStreamByUserProfileCard
          image="https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg"
          title="JannKarlos"
          description="Plays Amongs Us and Clash Royale"
          stringAvatars = {[
            "",
            "",
            "",
            "",
            ""
          ]}
          textDetail = "40 mil followers"
          />
        </FlexWrapper>
      </LayoutsDrawer.Drawer>
    </ContainerMainNavigator>
  );
};

export default GamingView;
