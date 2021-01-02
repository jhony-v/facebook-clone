import {SkeletonElementRow} from "@fb-components/globals/LoadersSkeletonElement";
import dynamic from "next/dynamic";


const AsyncContactList = dynamic(
   () => import("./ContainerOnlineContactFriendsList"),
   {
      loading: () => <SkeletonElementRow repeat={10} p='10px' />,
      ssr: false,
   }
);

export default () => <AsyncContactList />;
