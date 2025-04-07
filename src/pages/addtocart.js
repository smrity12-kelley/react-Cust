import React from 'react';
import  { useEffect,useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function Addtocart() {
	let user = JSON.parse(sessionStorage.getItem("user"));
	const [email,setemail] = useState(user.email);
	
     const[addcart,setaddcart]=useState([]);
	useEffect(()=>{
		 if(sessionStorage.getItem("user")===null)
		  {

			alert("Please Login to your account....");
			window.location="/"
		  }
		else{
	
 	Axios.get('http://localhost:1337/api/addtocart', {params:{ email:email }}).then((response)=>{
	// console.log(response.data);
	setaddcart(response.data);
});	
}
},[]);	


const calculateTotal = () => {
    let total = 0;
    addcart.map((val) => (total = total + val.cart_quantity * val.p_price));
    return total;
  };

  const [pid, setpid] = useState (null);

  const getpid=(pid)=>{
	
	setpid(pid);
	
  }


  function remove(cartid){
	// alert(cartid)
	Axios.post('http://localhost:1337/api/removepro', 
	
	{cartid:cartid}).then((response)=>{
    if(response.data.message)
{
	showToastMessage();
	}


	});
  }

  const showToastMessage = () => {
	toast.success('Product is removed from cart!', {

	});
}





  
	let [num, setNum]= useState(1);
	let incNum =(qty,cid)=>{
	  var newqty=parseInt(qty)+parseInt(1);
	  //alert(newqty);
	  //alert(cid);

//api call post
Axios.post('http://localhost:1337/api/update', 
	
{newqty:newqty,cid:cid}).then((response)=>{
if(response.data.message)


{

	//alert(response.data.message);

	window.location="/cart";

}

});



	};
	let decNum=(qty,cid,)=>{
		if (qty > 1)
		{
		var newqty=parseInt(qty)-parseInt(1);
	}
	else{
		var newqty=parseInt(qty)
		alert ("Poduct cannot be zero")

}
		//alert(newqty);
		//alert(cid);
  
  //api call post
  Axios.post('http://localhost:1337/api/update', 
	  
  {newqty:newqty,cid:cid}).then((response)=>{
  if(response.data.message)
  
  {
  	 // alert(response.data.message);
  
	  window.location="/cart";
  
  }
  
  });


	}
	let handleChange = (e) => {
		setNum(e.target.value);
	}
	

	
	
	const handlePayment = () => {
		const total = calculateTotal();
	
		const opt = {
			"key": "rzp_test_ETjGIvnx2Bl3D3",
			"amount": total * 100, 
			"name": "EraNext",
			"description": "purchase product",
			"currency": "INR",
			"netbanking": true,
			"prefill": { 
				name: "EraNext",
				email: "EraNext@gmail.com",
				contact: 1878787878,
			},
			"notes": {
				// soolegal_order_id: order_id,
			},
			"handler": function (response) {
				Axios.post("http://localhost:1337/api/orderinsert", {
					total: total,
					email: email 
				}).then((response) => {
					window.location = "/";
					alert("Order Placed successfully");
					
				}).catch((error) => {
					console.error("Error inserting data:", error);
				});
			},
			"theme": {
				"color": "#528FF0"
			}
		};
	
		var rzp1 = new window.Razorpay(opt);
		rzp1.open();
	
	
	};
	
	


  return (
    <>
      
      <div class="checkout">
	<div class="container">
		<h3>My Shopping Bag</h3>
		<div class="table-responsive checkout-right animated wow slideInUp" data-wow-delay=".5s">
			<table class="timetable_sub">
				<thead>
					<tr>
						<th>Remove</th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Product Name</th>
						<th>Price</th>
					</tr>
				</thead>
				{addcart.map((val) => { 
        return(

			<>
					<tr class="rem1">
			
						<td class="invert-closeb">
							<div class="rem">
								
								<a href="#" class="close1" data-toggle="modal" data-target="#myModal5" onClick={()=> getpid(val.p_id)}></a>
			
							</div>
							
						</td>
						
						<td class="invert-image"><div class="men-thumb-item">
						<img src={"http://localhost:1337/public/"+val.p_image}  class="pro-image-front" height="200" width="300"/>
						<img src={"http://localhost:1337/public/"+val.p_image2}  class="pro-image-back" height="200" width="300"/>
							
						
							<div class="men-cart-pro">
								<div class="inner-men-cart-pro">
									<Link to='/view' state={{id: val.p_id}}  class="link-product-add-cart">Quick View</Link>
								</div>
							</div>
							
					</div></td>
						<td class="invert">
							 <div class="quantity"> 
			
								<div class="quantity-select">                           
									<div class="entry value-minus" onClick={()=>decNum(val.cart_quantity,val.cart_id)}>&nbsp;</div>
									<div class="entry value">  <input type="text" class="form-control" value={val.cart_quantity} onChange={handleChange}/></div>
									<div class="entry value-plus active"  onClick={()=>incNum(val.cart_quantity,val.cart_id)}>&nbsp;</div>
								</div>
					
							</div>
						</td>
						<td class="invert">{val.p_name}</td>
						<td class="invert">
						Price:  &nbsp;<i class="fa fa-solid fa-indian-rupee-sign"></i>{val.p_price}
						<br/><br/><br/>
							Total: &nbsp;<i class="fa fa-solid fa-indian-rupee-sign"></i>{val.p_price  * val.cart_quantity}</td>
					

			
					
						</tr>
					
						</>
					)})
				}
								
								
			</table>
		</div>
		<div class="checkout-left">	
			
				<div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
					<a href="/"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Back To Shopping</a>
				</div>
				<div class="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
					<h4>Shopping basket</h4>
					
					<ul>
					{addcart.map((val) => { 
        return(

			<>
						<li>{val.p_name} <i>-</i> <span>{val.p_price  * val.cart_quantity}</span></li>
						</>
						)})
					}
						
					<hr/>
						<li>Total <i>-</i> <span><i class="fa fa-solid fa-indian-rupee-sign"></i>{calculateTotal()}</span></li>
						<input type="" value= {calculateTotal()} id="amt" hidden/>
					
						
				
	
				
						<div className="checkout-right-basket1 animated wow slideInRight" data-wow-delay=".5s">
							<button style={{ margin: "40px", marginTop: "0px" }} type="button" onClick={handlePayment}>
								Place Order&nbsp;&nbsp;<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
							</button>
        				</div>
				
				</ul>
				</div>
				<div class="clearfix"> </div>
			</div>	
	</div>
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
					<h3>Remove Product from Cart</h3>
					<form >
						<div class="sign-in">
						<center><b>	<h2>Are you sure?</h2> </b></center>
								
						</div>
					&nbsp;&nbsp;&nbsp;


						<div class="sign-in">      
		
							<input type="submit" onClick={()=>remove(pid)}  value="Remove"/>&nbsp;<input type="submit" data-dismiss="modal"  aria-label="Close" value="Cancle"/>
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

export default Addtocart;
