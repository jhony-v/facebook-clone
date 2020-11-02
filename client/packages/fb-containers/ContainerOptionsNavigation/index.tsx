import { SkeletonElementRow } from "@fb-components/LoadersSkeletonElement"
import dynamic from "next/dynamic"

const AsyncOptionsNavigationList = dynamic(()=>import("@fb-components/OptionsNavigationList"),{
    loading : () =>  <SkeletonElementRow repeat={10} p="10px" />,
     ssr:false
  }) 
  
const ContainerOptionsNavigation = () => {
    return  <AsyncOptionsNavigationList/>
}

export default ContainerOptionsNavigation
