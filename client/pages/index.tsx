import ContainerChatTabs from "@fb-components/ContainerChatTabs";
import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import IndexView from "@views/IndexView";

export default function Index() {
  return (
    <ContainerMainNavigator>
      <IndexView/>
      <ContainerChatTabs/>
    </ContainerMainNavigator>
  )
}
