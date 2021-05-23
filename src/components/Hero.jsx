import React from 'react'
import Style from './Hero.module.css'

function Hero() {
 return (
     <>
     <div className={Style.herocontainer}>

    <h1 className={Style.header}>Efficient web solutions</h1>
    <p className={Style.hero_explain}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sunt fugiat quod rem nesciunt necessitatibus accusamus sequi debitis similique aspernatur.</p>
     <button className={Style.hero_button}>Have a chat </button>
     </div>
  
     </>
 )

}
export default Hero