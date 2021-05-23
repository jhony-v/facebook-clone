import React, { FC } from 'react'
import { RouteComponentProps } from "@reach/router"
import { AppContentLayout } from '../../ui/layouts/AppContent'

const HomePage : FC<RouteComponentProps> = () => {
    return (
        <AppContentLayout>
            home page
        </AppContentLayout>
    )
}

export default HomePage
