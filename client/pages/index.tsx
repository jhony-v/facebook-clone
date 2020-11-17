import ContainerChatTabs from "@fb-containers/ContainerChatTabs";
import ContainerMainNavigator from "@fb-containers/ContainerMainNavigator";
import IndexView from "@views/IndexView";

export default function Index() {
  return (
    <ContainerMainNavigator>
      <IndexView/>
      <ContainerChatTabs/>
    </ContainerMainNavigator>
  )
}
