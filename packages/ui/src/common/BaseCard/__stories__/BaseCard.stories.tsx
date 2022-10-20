import "../../../../style.scss"
import { Meta } from "@storybook/react"
import BaseCard from "..";

export default {
    title : "BaseCard",
    component: BaseCard
} as Meta;


const Template = (props) => <BaseCard {...props} style={{height:"80px",width:"80px"}}>HELLO WORDL FROM A CARD</BaseCard>

export const ShadowSm = Template.bind({});
ShadowSm.args = {
    shadow : "sm"
}

export const ShadowMd = Template.bind({});
ShadowMd.args = {
    shadow : "md",
    rounded: 0
}

export const ShadowLg = Template.bind({});
ShadowLg.args = {
    shadow : "lg"
}