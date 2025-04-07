import React  from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Example() {

	



				


	const notify = () => toast("Wow so easy!");
  return (
    <>
    <div> <a href="#" class="use1" data-toggle="modal" data-target="#myModal6"><span>Login</span></a>
	<ToastContainer
position="top-right"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
	  <button onClick={notify}>Notify!</button>
        </div> 




    <div class="modal fade" id="myModal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
				<div class="forget">

<div class="modal-content modal-info">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
	</div>
	<div class="modal-body modal-spa">
		<div class="login-grids">
			<div class="login">
			
				<div class="login-right1">
					<h3>Logout</h3>
					<form >
						<div class="sign-in">
						<center><b>	<h2>Are you sure?</h2> </b></center>
								
						</div>
					&nbsp;&nbsp;&nbsp;
						<div class="sign-in">      
		
							<input type="submit" value="Logout"/>&nbsp;<input type="submit" value="Cancle"/>
						</div>
 </form>
					
				</div>
				<div class="clearfix"></div>
			</div>
		
			</div>
	      </div>
        </div>
     </div>
   </div>
</div>

           
    </>
  );
}

export default Example;