import { Provider } from 'overmind-react'
import React, { FC, PropsWithChildren } from 'react'
import { overmindStore } from '.'

const StoreProvider : FC<PropsWithChildren<{}>> = ({children}) => {
    return <Provider value={overmindStore}>{children}</Provider>
}

export default StoreProvider