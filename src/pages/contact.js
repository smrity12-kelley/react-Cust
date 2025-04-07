import React from 'react';
import Axios from 'axios';
function Contact()
{

	const submitmsg=()=>{
		var name= document.getElementById("fname").value;
		// alert(name);
		var email= document.getElementById("mail").value;
		// alert(email);
		var msg= document.getElementById("msg").value;
		Axios.post("http://localhost:1337/api/contectusmsg",{name:name, email:email, msg:msg})
		.then((response)=>{
			alert("Your message has been successfully  ")
				console.log(response.data);
				window.location = "/";
		})
	}

return(
<>


<div class="page-head">
<div class="container" style={{opacity:"0.7"}}>	
	<div style={{backgroundColor:"white"}}><h3 style={{color:"#58769E"}}><b>Contact  Us</b></h3></div>
	</div>
</div>

	<div class="contact">
		<div class="container">
			<div class="contact-grids">
				<div class="col-md-4 contact-grid text-center animated wow slideInLeft" data-wow-delay=".5s">
					<div class="contact-grid1">
						<i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>
						<h4>Correspondence address : </h4>
						<p>   ul. Fiołkowa 44<span>Warsaw, Poland</span></p>
					</div>
				</div>
				<div class="col-md-4 contact-grid text-center animated wow slideInUp" data-wow-delay=".5s">
					<div class="contact-grid2">
						<i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>
						<h4>Call Us</h4>
						<p>  (+48) 22 55 54 153<span> (+48) 55 26 54 356</span></p>
					</div>
				</div>
				<div class="col-md-4 contact-grid text-center animated wow slideInRight" data-wow-delay=".5s">
					<div class="contact-grid3">
						<i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>
						<h4>Email</h4>
						<p><a href="mailto:info@example.com">info@lavishlyleathers.com</a><span><a href="mailto:info@example.com">info@lavish.com</a></span></p>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
			{/* <div class="map wow fadeInDown animated" data-wow-delay=".5s">
				<h3 class="tittle">View On Map</h3>
				<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819" frameborder="0" 	></iframe>
			</div> */}
			<h3 class="tittle">Contact Form</h3>
		       <form onSubmit={submitmsg}>
				<div class="contact-form2">
					<input type="text" placeholder='Enter Your Name' onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" id="fname" required/>
					<input type="email" placeholder='Enter Your Email' onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" id='mail' required=""/>
					<textarea type="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required id='msg' placeholder='Message...'></textarea>
					<input type="submit" value="Submit"  />
				</div>
                </form>
		</div>
	</div>




</>

);






}
export default Contact;