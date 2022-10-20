import "../../../../style.scss"
import { Meta } from "@storybook/react"
import BaseButton from "..";

export default {
    title : "BaseButton",
    component: BaseButton
} as Meta;


const Template = (props) => <BaseButton {...props}>Button</BaseButton>

export const Default = Template.bind({});