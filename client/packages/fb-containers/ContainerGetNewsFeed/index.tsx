import { SkeletonElementCard } from '@fb-components/LoadersSkeletonElement'
import dynamic from 'next/dynamic'

const AsyncNewsFeedExample = dynamic(()=>import("../../../examples/NewsFeed.example"),{
    loading : () =>  <SkeletonElementCard repeat={10} />,
    ssr:false
}) 

const AsyncCreateNewPostExample = dynamic(() => import("../../../examples/CreateNewPost.example"),{
    loading : () =>  <SkeletonElementCard repeat={1} scale="20px" />,
    ssr: false
})

const ContainerGetNewsFeed = () => {
    return <>
    <AsyncCreateNewPostExample/>
     <AsyncNewsFeedExample/>
     </>
}

export default ContainerGetNewsFeed
