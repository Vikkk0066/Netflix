import React,{useState,useEffect} from 'react'
import Navbar from './../Nav'
import './Password.css'
import './Spinner.css'
import axios from './Axios_sign'
import {withRouter} from  'react-router-dom'
function Password(props) {
    const [email, SetEmail] = useState('');
    const[pass,setPass]=useState('');
    const [toless, SetShow] = useState(false)
    const [loader,SetLoader]=useState()
    useEffect(() => {

        // const e = new URLSearchParams(props.location.search);
        let p = props.location.search;    //p=?pkamurya112000@gmail.com  (so after slice 1)=>pkamurya112000@gmail.com 
        p = p.slice(1);
        console.log(p)
        // for (let i of e.entries()) {
        //     var n = i[0];       //if more than one entries inn search so we can use this type of methods 
                                  //but here only one that's why i am using above approach
        // }
        // SetEmail(n)    
        SetEmail(p)
    }, [])
    const SetPassword_input = (event) => {
        const pas = event.target.value;
         if (pas == '') {
                SetShow(false)
            }
        setPass(pas);
    }
    const Register_function = (event) => {
        event.preventDefault();
        if (pass.length <6) {
            SetShow(true)
        } else {
            SetLoader(true)
            SetShow(false)
              const Data = {
            Email: email,
            Password:pass
            }
           
        // console.log(Data)
        // console.log(axios)
        axios.post('/LoginData.json', Data)
            .then(res => {
                console.log(res)
                SetLoader(false);
                props.history.push('/')
            }).catch(err => {
                console.log(err)
            })
        }
      
    }
    return (
      
        <>
            <nav className="Nav_in_pass">
            <Navbar Password></Navbar>
            </nav>  
            <section className="Mainbody_in_Pass">
                <div className="content_in_pass">
                    <h3 className="H3_pass">Welcome back!</h3>
                    <h3 className="H3_pass">Joining Netflix is easy.</h3>
                    <p className="p_para">Enter your password and you'll be watching in no time.</p>
                    <p className="p_para">Email:</p>
                    <p className="p_para">{email }</p>
                     <div className="form_pass">
                        <form onSubmit={(event)=>Register_function(event)}>
                                       
                        <input required type="password" name="password" value={pass} autoComplete="off" onChange={(event)=> SetPassword_input(event)} id="" className="input_para" placeholder="Enter Your Password" />
                         {toless?<p className="toless">Password should be 6 or more than 6</p>:null}
                            <button type="submit" className={`button_para ${loader ? "None" : null}`}>CONTINUE</button>
                            <div className={`${loader?"loader":"None"}`}></div>
                            {/* {`${loader?:<div></div>}`} */}
                    </form>
                </div>
                </div>
            </section>
        </>
    )
}

export default withRouter(Password)
