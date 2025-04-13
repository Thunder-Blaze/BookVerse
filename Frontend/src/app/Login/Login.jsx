import './Login.css' 

const Login=()=>{
  return(
    <div className="background">
      <div className="backgroundImage">
        <h1>Welcome To Library</h1>
    <div className="form"><form action="" >
        <h2>Login Page</h2>
                <div class="signup-main">
                     <label for="email"className="email" >Email</label>
                     <br />
                     <input type="Email" id="email" name="email" required/>
                     <br /><br />
                     <label for="Password" className="email">Password</label>
                     <br />
                     <input type="Password" id="Password" required minlength="8"/>
                     <br /><br />
                      <input type="checkbox" className="checkbox" id="checkbox"/>
                      
                    <label for="checkbox" className="remember">Remember me</label>
                    <br />
                      <input type="submit" name="Log" onclick="validate()" id="Log" className="submit" value="Log in"/>
                      <br /><br />
                      <input type="submit" name="continue" id="continue" className="submit" value="Continue with Google"/>
                      <br /><br />
                </div>
                <p><i>Terms and Conditions</i> <b>•</b> <i>Privacy Policy</i></p><br />
                <p className="">New user? <a href="./signup.html">Sign up</a></p>
    </form>

    </div>
    </div>
    </div>
  );  
};
export default Login