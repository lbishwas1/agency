import React from 'react'
import Style from './CaseStudies.module.css'

function CaseStudies() {
 return (
     <>
     <div className={Style.casestudy}>
       <div>
   <p className={Style.case_text}>Our works</p>
   <p className={Style.case_bigtext}>Case Studies</p>
   <p className={Style.caseex}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tempore culpa eius tenetur laboriosam. Consequatur unde iure asperiores facere ducimus, perspiciatis veniam numquam explicabo aperiam odit ea illo. Aliquam, ea.</p>
   </div>
   <button className={Style.casebtn}>View more</button>
   </div>
     <div className={Style.casecontainer}>
       <div className={Style.casecard}>

       </div>
       <div className={Style.casecard}>

</div>
<div className={Style.casecard}>
</div>
     </div>
     </>

 )

}
export default CaseStudies