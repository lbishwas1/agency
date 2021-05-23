import React from 'react'
import Style from './Testimonial.module.css'
import pp from '../img/pp.JPG'

function Testimonial() {
 return (
     <>
     <div className={Style.testcontainer}>
   <p className={Style.test_text}>Testimonial</p>
   <p className={Style.test_bigtext}>What our clients says</p>
   <p className={Style.testex}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tempore culpa eius tenetur laboriosam. Consequatur unde iure asperiores facere ducimus, perspiciatis veniam numquam explicabo aperiam odit ea illo. Aliquam, ea.</p>
     
   <div className={Style.test}>
       <div className={Style.testitem}>
                <p className={Style.testcon}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet quibusdam sapiente possimus fugiat corporis! Doloribus, placeat sequi repellat unde hic esse, in labore praesentium debitis alias perspiciatis ea officiis!</p>
                <div className={Style.author}>
                  <img  className={Style.img} src={pp} alt="" />
                  <div>
                    <h4>BISHWAS LAMSAL</h4>
                    <p>Lorem ipsum dolor </p>
                  </div>
                </div>
              
       </div>
       <div className={Style.testitem}>
       <p className={Style.testcon}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet quibusdam sapiente possimus fugiat corporis! Doloribus, placeat sequi repellat unde hic esse, in labore praesentium debitis alias perspiciatis ea officiis!</p>
                <div className={Style.author}>
                  <img  className={Style.img} src={pp} alt="" />
                  <div>
                    <h4>BISHWAS LAMSAL</h4>
                    <p>Lorem ipsum dolor </p>
                  </div>
                </div>
       </div>
   </div>
   </div>
     </>

 )

}
export default Testimonial