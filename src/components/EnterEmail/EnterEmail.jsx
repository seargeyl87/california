import './EnterEmail.css';


function EnterEmail() {

    return (
        <div className="enter-email">
            <div className="enter-email_background">
                <div className="enter-email_info">
                    <div className="enter-email_heading">Never miss a thing</div>
                    <div className="enter-email_description">Sign up for texts to be notified about our best offers on the perfect gifts.</div>
                </div>
                <div className="enter-email_img">
                    <img src="img/enter-email.png"/>
                </div>
                <div className="enter-email_sign-up">
                    <input type="search" name="Search" placeholder="Your email"/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default EnterEmail;