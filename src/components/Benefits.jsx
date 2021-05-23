import React, { useState } from 'react'
import Style from './Benefits.module.css'

function Benefit() {
  const[toggleState,setToggleState] =useState(1);
  const toggleTab =(index) => {
    setToggleState(index);
  }

 return (
     <>
     <div className={Style.benefit}>
       <div className={Style.benefitcontainer}>
                  <p className={Style.benefit_text}>Our benefits</p>
                  <p className={Style.benefit_bigtext}>Why choose us?</p>
                  <p className={Style.benefitex}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tempore culpa eius tenetur laboriosam. Consequatur unde iure asperiores facere ducimus, perspiciatis veniam numquam explicabo aperiam odit ea illo. Aliquam, ea.</p>
    </div>
     <div className={Style.tabcontainer}>
       <div>
        <ul className={Style.tabs}>
          <li className={Style.tabitem} onClick={() => toggleTab(1)}>Team</li>
          <li className={Style.tabitem} onClick={() => toggleTab(2)}>Communication</li>
          <li className={Style.tabitem} onClick={() => toggleTab(3)}>Solution</li>
          <li className={Style.tabitem} onClick={() => toggleTab(4)}>Quality</li>
        </ul>
        </div>
      <div className={toggleState===1 ?'tabcontent': 'block'} >
            <h2>
              Close Knit Team
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum hic veniam facere a labore laudantium, necessitatibus ullam neque soluta odio numquam, odit, quibusdam nisi qui deleniti earum voluptates? Maxime dignissimos enim magni natus quas nesciunt soluta nulla, atque ipsam.</p>
     </div>
     <div className={toggleState===2 ?'tabcontent': 'block'}>
            <h2>
              Communication
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum hic veniam facere a labore laudantium, necessitatibus ullam neque soluta odio numquam, odit, quibusdam nisi qui deleniti earum voluptates? Maxime dignissimos enim magni natus quas nesciunt soluta nulla, atque ipsam.</p>
     </div>
     <div className={toggleState===3 ?'tabcontent': 'block'}>
            <h2>
              Solution
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum hic veniam facere a labore laudantium, necessitatibus ullam neque soluta odio numquam, odit, quibusdam nisi qui deleniti earum voluptates? Maxime dignissimos enim magni natus quas nesciunt soluta nulla, atque ipsam.</p>
     </div>
     <div className={toggleState===4 ?'tabcontent': 'block'}>
            <h2>
              Quality
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum hic veniam facere a labore laudantium, necessitatibus ullam neque soluta odio numquam, odit, quibusdam nisi qui deleniti earum voluptates? Maxime dignissimos enim magni natus quas nesciunt soluta nulla, atque ipsam.</p>
     </div>
     </div>
     </div>
     </>

 )

}
export default Benefit