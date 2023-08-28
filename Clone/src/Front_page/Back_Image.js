import React from 'react'
import './Front.css'
import Model from './Model'
import About from './About'
// https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/4a9270dc-7a97-44da-bda4-4dfc2dd4ea20/IN-en-20210201-popsignuptwoweeks-perspective_alpha_website_small.jpg"
// https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/c2e1c04b-d3eb-485c-baed-e9e9e0498474/IN-en-20210125-popsignuptwoweeks-perspective_alpha_website_small.jpg
function Back_image({For_login}) {
    return (
        <section className={`Back_Image_Front ${For_login?"Back_login": null }`}>
                <img  className="backPicture"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/4a9270dc-7a97-44da-bda4-4dfc2dd4ea20/IN-en-20210201-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="Back" />
             <div className="allFade"></div>
                
            {/* Model */}
            <Model></Model>
            <About></About>
            </section>
    )
}

export default Back_image
