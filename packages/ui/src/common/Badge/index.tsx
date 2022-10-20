import { FC } from 'react'
import { BaseBadge } from './index.styles'
import { AiFillEye } from "react-icons/ai"

type BadgeProps = {
    live?: boolean,
    watching ?: number,
    notification ?: number
}

const Badge : FC<BadgeProps> = ({live,notification,watching}) => {
    const existsWatching = watching !== undefined;
    const existsNotifications = notification !== undefined;

    return (
        <BaseBadge live={live} watching={existsWatching} notification={existsNotifications}>
          {live && 'LIVE'}
          {existsWatching && (
             <> <AiFillEye/> {watching} </>
          )}
          {existsNotifications && `${notification} +`}
        </BaseBadge>
    )
}

export default Badge