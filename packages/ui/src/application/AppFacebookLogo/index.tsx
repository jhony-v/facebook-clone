import React from 'react'
import styled from 'styled-components'
import "./index.scss";

const StyledComponent = styled.button`
    background:var(--button-10);
`

const AppFacebookLogo = () => {
    return (
        <div>
            <StyledComponent className="controller">
                hola
            </StyledComponent>
            <StyledComponent className="controller">
                hola
            </StyledComponent>
        </div>
    )
}

export default AppFacebookLogo
