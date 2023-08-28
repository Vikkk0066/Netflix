import React from 'react'
import './About.css'
function About(props) {
    return (
            <footer className={`${!props.Front?"about_main":"about_main_front"}`}>
                <div className="about_content">
                    <p className="about_para">Questions? Call 000-800-040-1843</p>
                    <div className="all_link_about">
                        <a href="#">FAQ</a>
                        <a href="#">Help Centre</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookie Preferences</a>
                    <a href="#">Corporate Information</a>
                    {props.Front ?
                        <>
                            <a href="#"> Account</a>
                            <a href="#">CentreMedia </a>
                            <a href="#">CentreInvestor </a>
                            <a href="#"> WatchTerms of Use</a>
                            <a href="#">Information </a>
                            <a href="#">Speed  </a>
                            <a href="#">Contact us </a>
                            <a href="#"> Legal Notices</a>
                    </>:null}
                    </div>
                </div>
             </footer>
    )
}

export default About
