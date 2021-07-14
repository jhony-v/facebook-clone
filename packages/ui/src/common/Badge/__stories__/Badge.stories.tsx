import "../../../../style.scss"
import Badge from "..";
import { Meta, Story } from "@storybook/react"
import React from "react";

export default {
    title : "Badge",
    component: Badge
} as Meta;


const Template = (props) => <Badge {...props} />

export const Live = Template.bind({});
Live.args = {
    live: true
}

export const Watching = Template.bind({})
Watching.args = {
    watching : 235,
}

export const Notification = Template.bind({})
Notification.args = {
    notification : 5,
}