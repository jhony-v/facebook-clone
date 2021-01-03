import {SkeletonElementRow} from "@fb-components/globals/LoadersSkeletonElement";
import dynamic from "next/dynamic";


const AsyncOptionsNavigationList = dynamic(
   () => import("@fb-components/layouts/OptionsNavigationList"),
   {
      loading: () => <SkeletonElementRow repeat={10} />,
      ssr: false,
   }
);

const ContainerOptionsNavigation = () => <AsyncOptionsNavigationList />;

export default ContainerOptionsNavigation;
