import React from 'react'
import{NavigationDots} from '../components'
//, SocialMedia 
//put back under component if needed <SocialMedia/>
const AppWrap = (Componet, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper app__flex'>
            <Componet/>

            <div className='copyright'>
                <p className='p-text'>@2022 ELRIC</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;