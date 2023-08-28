import React from 'react'
import Navbar from './../Nav'
import Front_text from './Front_text'
import Second_page from './Second_page'
import Third_page from './Third_page'
import About from './About'
import './Front.css'
function Front() {
    //https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    // https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
    return (
        <section className="Front">
            {/* Navabar */}
            <Navbar Front></Navbar>
            {/* Background Image */}
            <div className="Back_Image_Front">
              
                <img className="backPicture"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/4a9270dc-7a97-44da-bda4-4dfc2dd4ea20/IN-en-20210201-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="Back" />
                <div className="allFade"></div>
                {/* Front_text */}
                <Front_text />     
                
            </div>
            <div className="MainArea" >
                {/* Second Page */}
                <Second_page></Second_page>
                {/* Third Page */}
                <Third_page></Third_page>
                {/* About */}
                <About Front></About>
            </div>
        </section>
    )
}

export default Front
