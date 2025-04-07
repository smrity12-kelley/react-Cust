import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BsFillSuitHeartFill } from "react-icons/bs";
function Quickview() {
	

	
	const[view1,setview1]=useState([]);
	const[review,setreview]=useState([]);
 
	const {id }= useParams();
    const urlid = id || null;

	const location =useLocation();
	const procat = location.state ? location.state.id : null;
	
	 useEffect(()=>{

		if(urlid== null){

Axios.get('http://localhost:1337/api/get_view',  
{params: { id:procat, }}).then((response)=>{ setview1(response.data); });


Axios.get('http://localhost:1337/api/get_review',{params:{procat:procat}}).then((response)=>{
			
	setreview(response.data)
})
		
	}
	else{
		Axios.get('http://localhost:1337/api/get_view',{params:{id:urlid}}).then((response)=>{
			
		setview1(response.data);
		})


		Axios.get('http://localhost:1337/api/get_review',{params:{procat:urlid}}).then((response)=>{
			
	setreview(response.data)
})
	}
	
		
 
   },[urlid,procat]);
	
	
	//Add to Cart

	const  onpostpro=(id)=>{

		if(sessionStorage.getItem("user")===null)
	
		{
	
			alert("Please Login to your account....");
	
			window.location="/";
	
		}
	
		else{
	
	   
			let user=JSON.parse(sessionStorage.getItem("user"));
	
			var email=user.email;
	
			Axios.post('http://localhost:1337/api/cartItemsV',
	
			{email:email,id:id}).then((response)=>{
	
		   if(response.data.message=="")
	
		   {
	
		 
		   window.location="/cart"
	
		   }
	
	   else{
	
	   //console.log=(response);
	
	    
   if(response.data.message==" Product is already in the cart !! ")
   
   {

	showToastMessage1();

   }
   else{
   showToastMessage();
  

   }
	
	   }
	
	   });
		}
	};
	  

	const showToastMessage = () => {
		toast.success('Product added to cart!', {
	
			
		});
	}
	
	const showToastMessage1 = () => {
		toast.success('Product is already in cart!', {
	
			
		});
	}


	// Whishlist

 
const  onpostpro1=(id)=>{

    if(sessionStorage.getItem("user")===null)

    {

        alert("Please Login to your account....");

        window.location="/";

    }

    else{

   

        let user=JSON.parse(sessionStorage.getItem("user"));

        var email=user.email;

        Axios.post('http://localhost:1337/api/wishlist',

        {email:email,id:id}).then((response)=>{

       if(response.data.message==="")

       {

     

       window.location="/cart"

       }

   else{

   //console.log=(response);


   if(response.data.message==" Product is already in wishlist !! ")
   
   {

	showToastMessage3();

   }
   else{
   showToastMessage2();
  

   }
   

  
}
   });


    }


};

const showToastMessage2= () => {
	toast.success('Product added to wishlist!', {

		
	});
}

const showToastMessage3 = () => {
	toast.success('Product is already in wishlist !', {

		
	});
}

function addreview(){

	let user=JSON.parse(sessionStorage.getItem("user"));
	let uid = user?user.uid:null;
	let name = document.getElementById("r_name").value
	let email = document.getElementById("r_email").value
	let description = document.getElementById("r_des").value

	Axios.post('http://localhost:1337/api/addrev',{uid:uid,name:name,email:email,description:description,p_id:procat}).then((response)=>{
		alert("review Added Sucessfully")
		window.location.reload()

})}

  return (
    <>
      
      <div class="page-head">
	  <div class="container" style={{opacity:"0.7"}}>	
	<div style={{backgroundColor:"white"}}><h3 style={{color:"#58769E"}}><b>Quick View</b></h3></div>
	</div>
</div>

<div class="single">
	<div class="container">
	
		<div class="col-md-6 single-right-left animated wow slideInUp animated" data-wow-delay=".5s" >
			<div class="grid images_3_of_2">
				<div class="flexslider">
				{view1.map((val) => { 
        return(
                <>
           
					<ul class="slides">
						<li data-thumb="images/d2.jpg" style={{listStyle:"none"}}>
							<div class="thumb-image">
							<Carousel>  
                <div>  
				<img src={"http://localhost:1337/public/"+val.p_image} data-imagezoom="true" class="img-responsive"/>
                      
                </div>  
                <div>  
				<img src={"http://localhost:1337/public/"+val.p_image2} data-imagezoom="true" class="img-responsive"/>
                     
                </div>  
                <div>  
				<img src={"http://localhost:1337/public/"+val.p_image3} data-imagezoom="true" class="img-responsive"/>
                     
                </div> 
			
            </Carousel> 
								  </div>
						</li>
							
					</ul>
					</>  
            )})
}
					<div class="clearfix"></div>
				</div>	
			</div>
		</div>
     
		{view1.map((val) => { 
        return(
                <>
           
		<div class="col-md-6 single-right-left simpleCart_shelfItem animated wow slideInRight animated" data-wow-delay=".5s" >
					<h3>{val.p_name}</h3><br/>	
					<p><span class="item_price">&#x24;{val.p_price}</span></p>
					<div class="rating1">
						<span class="starRating">
							<input id="rating5" type="radio" name="rating" value="5"/>
							<label for="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4"/>
							<label for="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked=""/>
							<label for="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2"/>
							<label for="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1"/>
							<label for="rating1">1</label>
						</span>
					</div>
					<br/>
					{/* <div class="description">
						<h5>Check delivery, payment options and charges at your location</h5>
						<input type="text" placeholder="Enter pincode" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter pincode';}" required=""/>
						<input type="submit" value="Check"/>
					</div><br/> */}
					<div class="color-quality">
						<div class="color-quality-right">
							<h5>Size :</h5>
							<select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
								<option value="null">L</option>
								<option value="null">M</option> 
								<option value="null">XL</option>					
								<option value="null">XXL</option>								
							</select>
						</div>
					</div><br/><br/>
					{/* <div class="occasional">
						<h5>Types :</h5>
						<div class="colr ert">
							<label class="radio"><input type="radio" name="radio"/><i></i>Casual Shoes</label>
						</div>
						<div class="colr">
							<label class="radio"><input type="radio" name="radio"/><i></i>Sports Shoes</label>
						</div>
						<div class="colr">
							<label class="radio"><input type="radio" name="radio"/><i></i>Formal Shoes</label>
						</div>
						<div class="clearfix"> </div>
					</div> */}
					<div class="occasion-cart">
					<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro1(val.p_id)}><BsFillSuitHeartFill /> Wish List</div>	&nbsp;
					<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro(val.p_id)}><i class="fa-solid fa-cart-shopping"></i> Add to cart</div>	
<ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>		
					</div>
					
		</div>
		</>  
            )})
}
				<div class="clearfix"> </div>

				<div class="bootstrap-tab animated wow slideInUp animated" data-wow-delay=".5s" >
					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
						<ul id="myTab" class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Description</a></li>
							<li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Add Review</a></li>
							<li role="presentation"><a href="#review" role="tab" id="review-tab" data-toggle="tab" aria-controls="review">Reviews</a></li>
							
						</ul>
						<div id="myTabContent" class="tab-content">
							<div role="tabpanel" class="tab-pane fade in active bootstrap-tab-text" id="home" aria-labelledby="home-tab">
								<h5>Product Brief Description</h5>
								{view1.map((val) => { 
        return(
                <>
								<p>{val.p_discription}</p>
									</>)})}
							</div>
							<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="profile" aria-labelledby="profile-tab">
								<div class="bootstrap-tab-text-grids">
									
									
									<div class="add-review">
										<h4>add a review</h4>
										<form onSubmit={addreview}>
											<input type="text" placeholder='Name' id="r_name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""/>
											<input type="email" placeholder="Email"  id="r_email"onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
											
											<textarea type="text" id="r_des" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
											{ sessionStorage.getItem("user") == null?
							<>
							<input 
  type="submit" 
  onClick={(e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert("Please login first"); 
    window.location = "/"; // Redirect to the login page
  }} 
  value="SEND"
/>
							</>
							:
							<>
							<input type="submit" value="SEND"/>
							</>}
											
											
										</form>
									</div>
								</div>
							</div>
							<div role="tabpanel" class="tab-pane fade bootstrap-tab-text" id="review" aria-labelledby="review-tab">
							<div class="bootstrap-tab-text-grids">
    {review && review.length > 0 ? (
        review.map((val, index) => (
            <div class="bootstrap-tab-text-grid" key={index}>
                <div class="bootstrap-tab-text-grid-left">
                    <img src="./assests/images/working.png" alt=" " class="img-responsive" />
                </div>

                <div class="bootstrap-tab-text-grid-right">
                    <ul>
                        <li><a href="#">{val.r_name}</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-share" aria-hidden="true"></span>Reply</a></li>
                    </ul>
                    <p>{val.r_message}</p>
                </div>

                <div class="clearfix"></div>
                <hr></hr>
            </div>
        ))
    ) : (
        <h4>No Reviews Added</h4>
    )}
</div>

								
							</div>
							
						
						</div>
					</div>
				</div>
	</div>
</div>





    </>
  )
}

export default Quickview;
