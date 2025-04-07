import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Luggage() {

   const[view,setview]=useState([]);
 


    useEffect(()=>{
  
        Axios.get('http://localhost:1337/api/get_gift',  
		

    ).then((response)=>{

        console.log(response.data);

        setview(response.data);

        });

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






//search



	
function Search() {

	var data = document.getElementById('cd').value;
	alert(data);

	Axios.post('http://localhost:1337/api/search1',
	{

		udata:data
	}).then((response) => {

		if (response.data) {
			setview(response.data)
		}
	});

  }







  return (
    <>
      
     
      <div class="page-head">
	<div class="container">	
		<h3>Men's Wear</h3>
	</div>
    
    <div class="clearfix"></div>

</div>



&nbsp;&nbsp;&nbsp;
    <div class="products">
<div class="container">
         
<div class="col-md-4 products-left">
			<div class="filter-price">
				<h3>Filter By Price</h3>
					<ul class="dropdown-menu6">
						<li>                
							<div id="slider-range"></div>							
							<input type="text" id="amount"  />
						</li>			
					</ul>  
                    <div class="clearfix"></div>                  
</div>

<div class="clearfix"></div> <div class="clearfix"></div> <div class="clearfix"></div>


<div class="css-treeview">
				<h4>Categories</h4>
				<ul class="tree-list-pad">
					<li><input type="checkbox" checked="checked" id="item-0" /><label for="item-0"><span></span>Men's Wear</label>
						<ul>
							<li><input type="checkbox" id="item-0-0" /><label for="item-0-0">Ethinic Wear</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Caps</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
									<li><a href="mens.html">Trousers</a></li>
								</ul>
							</li>
							<li><input type="checkbox"  id="item-0-1" /><label for="item-0-1">Party Wear</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Caps</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
									<li><a href="mens.html">Trousers</a></li>
								</ul>
							</li>
							<li><input type="checkbox"  id="item-0-2" /><label for="item-0-2">Casual Wear</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Caps</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
									<li><a href="mens.html">Trousers</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><input type="checkbox" id="item-1" checked="checked" /><label for="item-1">Best Collections</label>
						<ul>
							<li><input type="checkbox" checked="checked" id="item-1-0" /><label for="item-1-0">New Arrivals</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
								</ul>
							</li>
							
						</ul>
					</li>
					<li><input type="checkbox" checked="checked" id="item-2" /><label for="item-2">Best Offers</label>
						<ul>
							<li><input type="checkbox"  id="item-2-0" /><label for="item-2-0">Summer Discount Sales</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
								</ul>
							</li>
							<li><input type="checkbox" id="item-2-1" /><label for="item-2-1">Exciting Offers</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
								</ul>
							</li>
							<li><input type="checkbox" id="item-2-2" /><label for="item-2-2">Flat Discounts</label>
								<ul>
									<li><a href="mens.html">Shirts</a></li>
									<li><a href="mens.html">Shoes</a></li>
									<li><a href="mens.html">Pants</a></li>
									<li><a href="mens.html">SunGlasses</a></li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
           </div>

           <div class="col-md-8 products-right">
			<h5>Product Compare(0)</h5>
			<div class="sort-grid">
				<div class="sorting">
					<h6>Sort By</h6>
					<select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
						<option value="null">Default</option>
						<option value="null">Name(A - Z)</option> 
						<option value="null">Name(Z - A)</option>
						<option value="null">Price(High - Low)</option>
						<option value="null">Price(Low - High)</option>	
						<option value="null">Model(A - Z)</option>
						<option value="null">Model(Z - A)</option>					
					</select>
					<div class="clearfix"></div>
				</div>
				<div class="sorting">
					<h6>Showing</h6>
					<select id="country2" onchange="change_country(this.value)" class="frm-field required sect">
						<option value="null">7</option>
						<option value="null">14</option> 
						<option value="null">28</option>					
						<option value="null">35</option>								
					</select>
					<div class="clearfix"></div>
				</div>
			<div class="search">
					<input type="search" id="cd"   onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" required=""/>
					<button type='submit' onClick={Search}>search</button>
				</div>
				<div class="clearfix"></div>
			</div>
            </div>

				

            {view.map((val) => { 
        return(
                <>
                	<div class="col-md-3 product-men">
				<div class="men-pro-item simpleCart_shelfItem">

				

                 
					<div class="men-thumb-item">
						<img src={"http://localhost:1337/public/"+val.p_image}  class="pro-image-front" height="300" width="300"/>
						<img src={"http://localhost:1337/public/"+val.p_image}  class="pro-image-back" height="300" width="300"/>
							
						
							<div class="men-cart-pro">
								<div class="inner-men-cart-pro">
									<Link to='/view' state={{id: val.p_id}}  class="link-product-add-cart">Quick View</Link>
								</div>
							</div>
							<span class="product-new-top">New</span>				
					</div>
					<div class="item-info-product ">
						<h4><a href="single.html">{val.p_name}</a></h4>
						<div class="info-product-price">
							<span class="item_price"><i class="fa fa-solid fa-indian-rupee-sign"></i>{val.p_price}</span>
							
						</div>
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro1(val.p_id)}><i class="fa-regular fa-heart"></i></div>	&nbsp;
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro(val.p_id)}>Add to cart</div>	<ToastContainer
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
    </>
  )
}

export default Luggage;
