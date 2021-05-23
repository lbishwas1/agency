import React from 'react'
import Style from './Footer.module.css'

function Footer() {
 return (
     <>
     <div className={Style.business}>
        <h1>Let's talk about business</h1>
        <button className={Style.footerbtn}>Contact us</button>
     
     </div>
    
     <div className={Style.footer}>
            <div className={Style.footertop}>
                <div>
                    <h1>Workree</h1>
                    <p className={Style.footertext}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Lorem ipsum dolor sit amet.</p>
                    <div className={Style.certificates}>
                        <p>Certified by</p>
                    <i class="fab fa-github fa-5x"></i>
                    <i class="fab fa-aws fa-5x"></i>
                    <i class="fab fa-redhat fa-5x"></i>
                     </div>
                </div>
                <div>
                    <div className={Style.social}>
                    <i class="fab fa-facebook-f fa-1x"></i>
                    <i class="fab fa-twitter fa-1x"></i>
                    <i class="fab fa-linkedin-in fa-1x"></i>
                    </div>
                    <div>
                    <ul className={Style.footernav}>
                        <li className={Style.footeritem}>Services</li>
                        <li className={Style.footeritem}>About Us</li>
                        <li className={Style.footeritem}>Case Studies</li>
                        <li className={Style.footeritem}>Contacts</li>
                    </ul>
                    </div>
                    <h3>Newsletter</h3>
                    <p>Subscribe to our Newsletter</p>
                    <input type="text" placeholder="YOUR EMAIL" />
                    </div>
                    </div>
                    
            <div className={Style.footerbottom}>
                    <p>Copyright 2021</p>
            </div>

     </div>

   
     </>

 )

}
export default Footer