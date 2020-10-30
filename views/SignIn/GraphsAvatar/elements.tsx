import styled from "styled-components";

export type GraphAvatarTypes = {
    dimension : number;
    position : {
        x : number;
        y: number;
    }
}

const getSize = (props:GraphAvatarTypes) => {
    return props.dimension + "px";
}
export const GraphAvatar = styled.img<GraphAvatarTypes>`
    box-shadow:0 10px 30px rgba(0,0,0,.1);
    position:fixed;
    display:block;
    border-radius:100%;
    width:${props => getSize(props)};
    height:${props => getSize(props)};
    left:${props => props.position.x}px;
    top:${props => props.position.y}px;
`