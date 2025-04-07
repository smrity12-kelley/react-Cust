import React from 'react';
import Axios from "axios";

function Forgotpassword() {

  var Forget=()=>{

    var email1 = document.getElementById('email11').value;
	alert(email1);
Axios.post('http://localhost:1337/api/email',
{name:email1}).then((response)=>{
if(response.data.message)
{
alert("Email not found");
}
else{
alert('Password Send on Email Id!!!');
}
})
}

  return (
    <>
      

      &nbsp;&nbsp;&nbsp;&nbsp;
<div class="forget">

					<div class="modal-content modal-info">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
						</div>
						<div class="modal-body modal-spa">
							<div class="login-grids">
								<div class="login">
								
									<div class="login-right1">
										<h3>Forgot Password</h3>
										<form onSubmit={Forget}>
											<div class="sign-in">
												<h4>Email :</h4>
												<input type="text" placeholder='Enter Email' id="email11"   required/>	
											</div>
										
											<div class="sign-in">      
                            
												<input type="submit" value="Submit" class="form-control"/>
											</div>
                     </form>
										
									</div>
									<div class="clearfix"></div>
								</div>
								<p>By logging in you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>
                                </div>
						</div>
					</div>
				</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    </>
  )
}

export default Forgotpassword;
