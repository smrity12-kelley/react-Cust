import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {

   
    const[wish,setwish]=useState([]);
 
	useEffect(()=>{
		
          
		 if(sessionStorage.getItem("user")===null)
		  {

			alert("Please Login to your account....");
			window.location="/"
		  }
else{
	let user = JSON.parse(sessionStorage.getItem("user"));
		  var email=user.email;
 Axios.get('http://localhost:1337/api/wish', {params:{

 email:email,}}).then((response)=>{

	console.log(response.data);
	setwish(response.data);
});	
}
},[]);	
  
  
//Add to cart

const  onpostpro=(id)=>{

    if(sessionStorage.getItem("user")===null)

    {

        alert("Please Login to your account....");

        window.location="/";

    }

    else{

   
        let user=JSON.parse(sessionStorage.getItem("user"));

        var email=user.email;

        Axios.post('http://localhost:1337/api/cartItems',

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
   window.location="/cart"
 

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


function remove(wishid){

let user=JSON.parse(sessionStorage.getItem("user"));

var email=user.email;

	Axios.post('http://localhost:1337/api/removewish', 
	
	{wishid:wishid,email:email}).then((response)=>{
    if(response.data.message)


{

	showToastMessage2();
	
 
	
 
	}


	});
  }

  const showToastMessage2 = () => {
	toast.success('Product is removed from wishlist!', {

		
	});
}

const[wishid,setidd]=useState("")
function setwishid(id){

	setidd(id)

}



  return (
    <>
      
     
      <div class="page-head">
	  <div class="container" style={{opacity:"0.7"}}>	
	<div style={{backgroundColor:"white"}}><h3 style={{color:"#58769E"}}><b>Wishlist</b></h3></div>
	</div>
    
    <div class="clearfix"></div>

</div>


&nbsp;&nbsp;&nbsp;
    <div class="products">
<div class="container">
         


            {wish.map((val) => { 
        return(
                <>
                	<div class="col-md-3 product-men">
				<div class="men-pro-item simpleCart_shelfItem">

				

                 
					<div class="men-thumb-item">
						<img src={"http://localhost:1337/public/"+val.p_image}  class="pro-image-front" height="300" width="300"/>
						<img src={"http://localhost:1337/public/"+val.p_image2}  class="pro-image-back" height="300" width="300"/>
							
						
							<div class="men-cart-pro">
								<div class="inner-men-cart-pro">
									<Link to='/view' state={{id: val.p_id}}  class="link-product-add-cart">Quick View</Link>
								</div>
							</div>
							
					</div>
					<div class="item-info-product ">
						<h4>	<Link to='/view' state={{id: val.p_id}} >
							<a href="single.html">{val.p_name}</a></Link></h4>
						<div class="info-product-price">
							<span class="item_price">&#x24;{val.p_price}</span>
							
						</div>
							
						
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro(val.p_id)}>Add to cart</div> &nbsp; 
						
						
						
						<div class="item_add single-item hvr-outline-out button2"  data-toggle="modal" data-target="#myModal5"  onClick={()=>setwishid(val.wish_id)}  >Remove</div>		<ToastContainer
position="top-center"
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
                </div>
                </>  
            )})
}
          
		
	
			
</div>
            <div class="clearfix"></div>
</div>




<div class="modal fade" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
					<h3>Remove Product from wishlist</h3>
					<form >
						<div class="sign-in">
						<center><b>	<h2>Are you sure?</h2> </b></center>
						{/* <h1>{wishid}</h1> */}
								
						</div>
					&nbsp;&nbsp;&nbsp;

			
						<div class="sign-in">      
		
							<input type="submit" onClick={()=>remove(wishid)}  value="Remove"/>&nbsp;<input type="submit" data-dismiss="modal"  aria-label="Close" value="Cancle"/>
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
  )
}

export default Wishlist;
