import "../../../../style.scss"
import { Meta } from "@storybook/react"
import BaseSvgImage from "..";

export default {
    title : "BaseSvgImage",
    component: BaseSvgImage
} as Meta;


const Template = (props) => <BaseSvgImage {...props} src="https://cdn.pixabay.com/photo/2020/06/30/23/21/sunset-5357877__340.jpg" />

export const Default = Template.bind({})

export const Size = Template.bind({})
Size.args = {
    height: "100px",
    width: "200px",
    rounded: false,
}