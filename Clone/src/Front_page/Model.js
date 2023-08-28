import React, { useState } from 'react'
import './Model.css'
import { Link } from 'react-router-dom'
import axios from './Axios_sign'
import { withRouter } from 'react-router-dom'
function Model(props) {
    const [email, Setemail] = useState('');
    const [password, SetPassword] = useState('');
    const [email_err, Set_email_err] = useState(false);
    const [pass_err, Set_pass_err] = useState(false);
    const [pass_sign,SetPass_sign]=useState(false)
    let FetchedData= null;
    const Sign_In_Function = (event) => {
        event.preventDefault();
        // console.log(event)
        axios.get('/LoginData.json')
            .then(res => {
                // console.log(res.data)
                FetchedData = res.data;
                let Data_Array_Email = [];
                let Data_Array_pass = [];
                for (let item in FetchedData) {
                    Data_Array_Email.push(FetchedData[item].Email)
                    Data_Array_pass.push(FetchedData[item].Password)
                }
                var flag1 = false;
                var flag2 = false;
                for (var i = 0; i < Data_Array_Email.length; i++){
                    if (Data_Array_Email[i] === email) {
                        flag1 = true;
                        break;
                    }
                }
                if (!flag1) {
                    Set_email_err(true)
                }
                for (var j = 0; j < Data_Array_pass.length; j++){
                    if (Data_Array_pass[j] === password) {
                        flag2 = true;
                        break;
                    }
                }
                if (!flag2) {
                    SetPass_sign(true)
                }
                    
                if (flag1 && flag2) {
                      props.history.push("/Sign_in")
                }
            }).catch(err => {
                console.log(err)
            })
      
    }
    const changeHandlerEmail = (event) => {
        var i = event.target.value;
        Setemail(i);
        
        let l = i.length;
        if (l < 6) {
             Set_email_err(true)
        } else {
              Set_email_err(false)
        }
       if (l == 0) {
            Set_email_err(false)
        }
    }
    const changeHandlerPass = (event) => {
        var c = event.target.value
        // console.log(typeof c)
        SetPassword(c)
       SetPass_sign(false)
        let l1 = c.length;
        
        if (l1 < 6) {
             Set_pass_err(true)
        } else {
              Set_pass_err(false)
        }
         if (l1 == 0) {
            Set_pass_err(false)
        }
    }
    return (
        <div className="Model">
         <div className="Model_Child">
            <h2>Sign In</h2>
            <div className="SignInForm">
                <form onSubmit={(event)=>Sign_In_Function(event)}>
                        <div className="label1">
                        <label htmlFor="email" className="Wrap1">
                                <input required type="email" value={email} name="email" id="email"
                                    onChange={(event) => changeHandlerEmail(event)} autoComplete="off"
                                    placeholder="Email or Phone Number" className="fill" />
                                {/* <lable className="child" htmlFor="email">Email or Phone Number </lable> */}
                                  <div className={`Error_occur ${!email_err?"email_err":"email_err_show"}`}>Plz enter valid email address</div>
                        </label>  
                    </div>
                        <div className="label2">
                          <lable className="Wrap2" htmlFor="password">
                                <input type="password" required value={password} autoComplete="off"
                                    onChange={(event) => changeHandlerPass(event)}
                                    placeholder="Password" name="" id="password" className="fill" style={{
                                        marginTop:"0px"
                                    }} />
                                <div className={` Error_occur ${!pass_err ? "pass_err" : "pass_err_show"}`}>Password must be contain 6 or more than
                                   6 character</div>
                                <div className={`Error_occur ${pass_sign?"pass_sign_show":"notshow_pass_sign"}`}>Password Incorrect</div>
                            {/* <lable className="child"> </lable> */}
                        </lable>  
                    </div>
                        <div className="Sign_in_Button" style={{
                        marginBottom: "10px",
                    }}>
                        <button type="submit" >Sign In</button>
                    </div>
                        <span>
                             <input type="checkbox" name="" id="check" autoComplete="off"/>
                        <label htmlFor="check">Remember me</label>
                    </span>
                   <a className="Need_help" href="#">Need Help?</a>
                </form>
                </div>  
                <div className="log_in_fb">
                    <a href="https://www.facebook.com/" target="_blank"><img className="fb"
                        src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="" />
                        <span className="Login_text">Login with Facebook</span>
                        </a>
                </div>
                <div className="sign_up">
                    <span className="New_to_nelflix">New To Netflix</span>
                   {/* <button className="Link_For_Sign" onClick={Sign_In_Function}>Sign up Now</button> */}
                   <Link className="Link_For_Sign" to="/Sign_up">Sign up Now</Link>
                   {/* <button className="Link_For_Sign" onClick={Sign_In_Function}>Sign up Now</button> */}
                </div>
               
         </div>
         </div>
    )   
}

export default withRouter(Model)
