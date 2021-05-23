import React from 'react'
import Style from './Services.module.css'

function Services() {
 return (
     <>
     <div className={Style.servicemain}>
     <div className={Style.servicecontainer}>
            <p className={Style.service_text}>Services</p>
            <p className={Style.service_bigtext}>What is our goal?</p>
            <p className={Style.explanation}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tempore culpa eius tenetur laboriosam. Consequatur unde iure asperiores facere ducimus, perspiciatis veniam numquam explicabo aperiam odit ea illo. Aliquam, ea.</p>
     <div className={Style.services}>
            <div className={Style.cards}>
            <i class="fas fa-code fa-3x"></i>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum consequatur saepe laboriosam mollitia. Voluptate?</p>
            </div>
            <div className={Style.cards}>
            <i class="fas fa-mobile-alt fa-3x"></i>
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum consequatur saepe laboriosam mollitia. Voluptate?</p>
            </div>
            <div className={Style.cards}>
            <i class="fas fa-palette fa-3x"></i>
            <h3>UI/UX design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum consequatur saepe laboriosam mollitia. Voluptate?</p>
            </div>
           <div className={Style.cards}>
            <i class="far fa-comments fa-3x"></i>
            <h3>Consultancy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum consequatur saepe laboriosam mollitia. Voluptate?</p>
            </div>
     </div>
     </div>
     </div>
     </>

 )

}
export default Services