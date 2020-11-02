import { SkeletonElementRow } from "@fb-components/LoadersSkeletonElement"
import dynamic from "next/dynamic"

const AsyncContactListExample = dynamic(()=>import("../../../examples/ContactList.example"),{
    loading : () =>  <SkeletonElementRow repeat={10} p="10px" />,
     ssr:false
}) 
  
const ContainerConnectionChatList = () => {
    return <AsyncContactListExample/>
}

export default ContainerConnectionChatList
