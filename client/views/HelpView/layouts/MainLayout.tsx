import {FC} from 'react'
import StitchesLayoutGenerator from './StitchesLayoutGenerator'


const MainLayout : FC = ({children}) => {
   return(
      <StitchesLayoutGenerator>
         {children}
      </StitchesLayoutGenerator>
   )
}

export default MainLayout
