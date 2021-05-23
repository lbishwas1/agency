import React from 'react';
import Style from './ServicePage.module.css'
import Footer from '../components/Footer'

function ServicePage()
{
return(
    <>
    <div className={Style.service}>
        <div className={Style.container}>
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae iure eaque nemo nam quas corporis, debitis tenetur. Ipsa, accusamus consectetur in sint praesentium reiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
    </div>
    </div>
    <div className={Style.container}>
        <h1>Ecommerce Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae iure eaque nemo nam quas corporis, debitis tenetur. Ipsa, accusamus consectetur in sint praesentium reiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
    </div>
    <div className={Style.casecontainer}>
       <div className={Style.casecard}>

       </div>
       <div className={Style.casecard}>

</div>

     </div>
     <div className={Style.container}>
        <h1>Web Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae iure eaque nemo nam quas corporis, debitis tenetur. Ipsa, accusamus consectetur in sint praesentium reiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
    </div>
    <div className={Style.container}>
        <h1>UI/UX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae iure eaque nemo nam quas corporis, debitis tenetur. Ipsa, accusamus consectetur in sint praesentium reiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
    </div>
    <div className={Style.service}>
        <div className={Style.container}>
        <h1>Algorithm of our work</h1>
        <ol>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
            <li className={Style.algo}>Lorem ipsum dolor sit amet.</li>
        </ol>
    </div>
   
    </div>
    <div className={Style.container}>
        <h1>Our Technologies</h1>
        <p>Lor consectetur inreiciendis nihil harum adipisci architecto magni perferendis officia, saepe excepturi sunt fugit, commodi velit. Quae, magni!</p>
        <h2>Frameworks</h2>
        <div className={Style.framework}>
        <h1><i class="devicon-react-original-wordmark colored 3x"></i></h1>
        <h1><i class="devicon-laravel-plain-wordmark colored"></i></h1>
        <h1><i class="devicon-angularjs-plain colored"></i></h1>
        <h1><i class="devicon-vuejs-plain-wordmark colored"></i></h1>
        <h1><i class="devicon-bootstrap-plain colored"></i></h1>
        </div>
        <h2>Mobile</h2>
        <div className={Style.framework}>
        <h1><i class="devicon-swift-plain colored"></i></h1>
        <h1><i class="devicon-android-plain-wordmark colored"></i></h1>
        <h1><i class="devicon-flutter-plain colored"></i></h1>
        <h1><i class="devicon-react-original-wordmark colored"></i></h1>
        </div>
        
    </div>
    <Footer />
    </>
)
}

export default ServicePage;