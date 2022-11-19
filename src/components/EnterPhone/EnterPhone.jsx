import './EnterPhone.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function EnterPhone() {
    let [phone, setPhone] = useState('enter your phone');
    let [name, setName] = useState('enter your name');
    let [signCorrect, setSignCorrect] = useState(false);
    let [stateButton, setStateButton] = useState(false)


    function  changePhone(e) {
        if(!e.target.value) {
            setPhone('enter your phone');
            setSignCorrect(false);
        } else if(e.target.value && isNaN(Number(e.target.value))) {
            setPhone(e.target.value);
            setSignCorrect(true)
        } else {
            setPhone(e.target.value);
            setSignCorrect(false);
        }
    }


    function  changeName(e) {
        if(!e.target.value) {
            setName('enter your phone');
        } else {
            setName(e.target.value);
        }
    }
    useEffect(() => {
  

    }, [])


    useEffect(() => {
     if(phone==='enter your phone' || name==='enter your name' || signCorrect) {
        setStateButton(true)
     } else {
        setStateButton(false)
     }
    }, [phone, name])

    async function  postData() {
        axios.post(`https://jsonplaceholder.typicode.com/users`, {enterPhone: phone, enterName: name}) 
          .then(res => {console.log(res.data)});
          setPhone('enter your phone');
          setName('enter your name');
    }
 

    return (
        <div className="enter-phone">
            <div className="enter-phone_background">
                <div className="enter-phone_info">
                    <div className="enter-phone_heading">Never miss a thing</div>
                    <div className="enter-phone_description">Sign up for texts to be notified about our best offers on the perfect gifts.</div>
                </div>
                <div className="enter-phone_img">
                    <img src="img/enter-phone.png"/>
                </div>
                <div className="enter-phone_sign-up">
                    {signCorrect ? <div className="enter-phone_sign-up_sign-correct">Enter correct value</div> : <div className="enter-phone_sign-up_sign-correct"></div>}
                    <input type="text" name="phone" placeholder={phone} onChange={changePhone}/>
                    <input type="text" name="name" placeholder={name} onChange={changeName}/>
                    <button onClick={postData}  disabled={stateButton}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default EnterPhone;