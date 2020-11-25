import Wrapper from '@fb-components/common/Wrapper'
import { FC } from 'react'
import { WeatherDetailCardWrapper } from './elements'

const MainWrapper : FC = ({children}) => {
    return (
        <WeatherDetailCardWrapper>
            <Wrapper m="20px">
                {children}
            </Wrapper>
        </WeatherDetailCardWrapper>
    )
}

export default MainWrapper
