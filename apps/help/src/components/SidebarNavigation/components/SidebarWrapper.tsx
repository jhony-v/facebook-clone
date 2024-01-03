import { styled } from '../../../lib/stitches.config'

export const SidebarWrapperHeader = styled("div", {
    height : "50px",
    padding : "10px",
    flex : "none",
    boxSizing : "border-box"
})
export const SidebarWrapperContent = styled("div", {
    flex : 1,
    display : "flex",
    overflowY : "hidden",
    flexDirection : "column",
})

