import React, { FC } from 'react'
import { RouteComponentProps } from "@reach/router"
import { AppContentLayout } from '../../ui/layouts/AppContent'
import HelpTopicsPreview from './sections/HelpTopicsPreview'
import HelpTopicsList from './sections/HelpTopicsList'

const HomePage : FC<RouteComponentProps> = () => {
    return (
        <AppContentLayout>
            <HelpTopicsPreview/>
            <HelpTopicsList/>
        </AppContentLayout>
    )
}

export default HomePage
