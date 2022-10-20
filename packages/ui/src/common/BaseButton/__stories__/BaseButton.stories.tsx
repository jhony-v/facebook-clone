import "../../../../style.scss"
import { Meta } from "@storybook/react"
import BaseButton from "..";

export default {
    title : "BaseButton",
    component: BaseButton
} as Meta;


const Template = (props) => <BaseButton {...props}>Example Button</BaseButton>

export const Primary = Template.bind({});
Primary.args = {
    variant : "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    variant : "secondary"
}