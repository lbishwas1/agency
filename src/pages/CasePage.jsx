import React from 'react';
import Style from './CasePage.module.css'
import Footer from '../components/Footer'

function CasePage()
{
return(
    <>
    <div className={Style.case}>
        <div className={Style.container}>
        <h1>Our works</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae iure eaque nemo nam quas corporis, debitis tenetur. Ipsa, accusamus consectetur in sint praesentium reiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
    </div>
    </div>

    <div className={Style.switch}>
        <ul className={Style.switchnav}>
            <li className={Style.switchitem}>Home</li>
            <li className={Style.switchitem}>Home</li>
            <li className={Style.switchitem}>Home</li>
            <li className={Style.switchitem}>Home</li>
            <li className={Style.switchitem}>Home</li>
            <li className={Style.switchitem}>Home</li>
        </ul>
    </div>

    <div className={Style.casecontainer}>
       <div className={Style.casecard}>
       </div>
       <div className={Style.casecard}>
       </div>
       <div className={Style.casecard}>
       </div>
       <div className={Style.casecard}>
       </div>
       <div className={Style.casecard}>
       </div>
       <div className={Style.casecard}>
</div>
 </div>
     
    
    <Footer />
    </>
)
}

export default CasePage;