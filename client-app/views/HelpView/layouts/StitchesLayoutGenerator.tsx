import Head from 'next/head';
import React, {FC} from 'react'
import {getCssString} from '../config/stitches.config';


const StitchesLayoutGenerator : FC = ({children}) => {
    return (
       <>
          <Head>
             <style id="stitches" dangerouslySetInnerHTML={{__html:getCssString()}} />
          </Head>
          {children}
       </>
     )
}

export default  StitchesLayoutGenerator;
