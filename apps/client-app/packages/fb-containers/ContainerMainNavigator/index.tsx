import AccountControlSettings from "@fb-components/globals/AccountControlSettings";
import HeaderNavigation from "@fb-components/layouts/HeaderNavigation";
import Navigation from "@fb-components/globals/Navigation";
import RootSearchEngine from "@fb-components/globals/RootSearchEngine";
import RootConfigLayout from "@fb-components/layouts/RootConfigLayout";
import { FCWithChildren } from "@utils/types";

const ContainerMainNavigator: FCWithChildren = ({ children }) => (
  <RootConfigLayout>
    <HeaderNavigation>
      <RootSearchEngine />
      <Navigation />
      <AccountControlSettings />
    </HeaderNavigation>
    {children}
  </RootConfigLayout>
);

export default ContainerMainNavigator;
