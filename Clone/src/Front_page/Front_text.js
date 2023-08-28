import React,{useState} from 'react'
import './Front_text.css'
import axios from './Axios_sign'
import { withRouter } from 'react-router-dom'
function Front_text(props) {
    const [input, SetInput] = useState('');
    const [dubli, SetDubli] = useState(false);
    
    const changeInput = (event) => {
        const i = event.target.value;
        console.log(i)
        SetInput(i);
        SetDubli(false)
    }
    const PostData = (event) => {
       
          event.preventDefault();
        let Find_dublicate=[];
        axios.get("/LoginData.json")
            .then(res => {
                console.log(res.data);
                for (let item in res.data) {
                    Find_dublicate.push(res.data[item].Email);
                }
                var isContinue=true;
                for (var i = 0; i < Find_dublicate.length; i++){
                    if (Find_dublicate[i] === input) {
                        SetDubli(true);
                        isContinue = false;
                        break;
                    }
                }
                 if (isContinue) {
           props.history.push({
            pathname: "/Pass",
            search:input
        })
      }
            }).catch(err => {
                console.log(err);
        })
        
       
       
    }
    return (
        <main className="Front_text">
            <h1 className="Title">Unlimited movies, TV shows and more.</h1>
             <p className="Para1">Watch anywhere. Cancel anytime.</p>
            <div className="form">   
            <form onSubmit={PostData}>
                <p className="Para2">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="input">
                            <div>
                    <label htmlFor="email" className="labelWrap">
                                    <input required type="email" onChange={(event) => changeInput(event)}
                                     autoComplete="off"  placeholder="Email Address" name="email" id="email" value={input} />
                                    <div
                                        className={`dublicate ${dubli ? "show_dubli" : "not_show_dubli"}`}>Email already registered
                                        </div>
                                    {/* {input?<div className="errorClass">Email is required</div>:null} */}
                    </label>
                            </div>       
                            <div>
                                {/* <input type="submit" value="Get Started"  className="button"/> */}
                                <button type="submit"
                                    className="button" >Get Started</button>
                            </div>
                </div>
               
            </form>
           </div>
            </main>
    )
}

export default withRouter(Front_text)
