import React from 'react';
import Style from './ContactPage.module.css'
import Footer from '../components/Footer'
import { Autorenew } from '@material-ui/icons';

function ContactPage()
{
return(
    <>
   
     <div className={Style.container}>
        <div className={Style.left}>
            <h1  className={Style.header}>Start a project with Workree</h1>
            <p className={Style.main}>lorem@email.com</p>
            <p className={Style.main}>(+977)540168</p>

            <p className={Style.main}>Kathmandu,Nepal</p>
            <p>Follow us</p>
            <div className={Style.social}>
                    <i class="fab fa-facebook-f fa-1x"></i>
                    <i class="fab fa-twitter fa-1x"></i>
                    <i class="fab fa-linkedin-in fa-1x"></i>
                    </div>
        </div>
        <div className={Style.right}>
            <h1 className={Style.header}>Contact us</h1>
            <form action="#">
                <div className={Style.forminput}>
                <input type="text" placeholder="Name" className={Style.contact}/>
                <input type="text" placeholder="Email" className={Style.contact} />
                </div>  <textarea type="text" placeholder="Your Message" style={{resize:"none"}} className={Style.msg}/>

            </form>
            <button className={Style.footerbtn}>Contact us</button>

            
        </div>
    </div>

    </>
)
}

export default ContactPage;