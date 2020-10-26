import React from 'react'
import CreateNewPost from '../../components/CreateNewPost'
import faker from "faker"

export default {
    title : "Components/CreateNewPost",
    component: CreateNewPost
}


export const Default = () => {
    return(
        <CreateNewPost userImage={faker.image.avatar()} inputPlaceholder="Escribir nueva publicación"></CreateNewPost>
    )
}