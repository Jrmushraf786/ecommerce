import "./Login.css";
import { Link } from "react-router-dom";
const Login = () =>{
    return(
        <>
        <div className="Login">  
            <Link to="/">
                <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3OmikUHzpPh7bRp-hUmUBQvhtWo55sIqBg&usqp=CAU"
                   className="LoginLogo"
                   alt=""
                   />
            </Link>
            {/* Login Form Start */}
            <div className="Logincontainer">
                <h1>sign in</h1>
                <form>
                    <h3>Email</h3>
                    <input type="email" placeholder="Your
                    Email" required/>
                    <h3>Password</h3>
                    <input type="passwword" placeholder="Your Password" required/>
                    <button className="LoginButton">Sign In</button>
                </form>
                <p>
                    By Continuing,You agree to Website condition's of use And Privacy .
                </p>
                <button className="LoginButton">Create Your Website Account</button>
            </div>
        </div>
      
        </>
    )
}
export default Login;