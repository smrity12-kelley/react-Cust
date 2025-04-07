import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import { BsFillSuitHeartFill } from "react-icons/bs";
function  WomenProduct() {

   
   const[view1,setview1]=useState([]);
 

   const location =useLocation();
   const procat = location.state ? location.state.name : null;

    useEffect(()=>{
  
        Axios.get('http://localhost:1337/api/get_pro1',  
		{params: {

        name:procat,

    }}).then((response)=>{

        console.log(response.data);

        setview1(response.data);

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

        Axios.post('http://localhost:1337/api/cartItems1',

        {email:email,id:id}).then((response)=>{

       if(response.data.message==="")

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


const [list, setCatList] = useState([]);

useEffect(() => {
  Axios.get('http://localhost:1337/api/fetchcatwomen').then((response) => {
	  setCatList(response.data); // Assuming the response is an array of categories
  }).catch(error => {
	  console.error('Error fetching categories:', error);
  });
}, []);

const drop=(id)=>{
	// alert(id);
			Axios.get("http://localhost:1337/api/fetchid",{params:{id:id}}).then((response)=>{
				setview1(response.data);
			});
}

  return (
    <>
      
	  <div class="page-head">
      <div class="container" style={{opacity:"0.7"}}>	
	<div style={{backgroundColor:"white"}}><h3 style={{color:"#58769E"}}><b>Women's Wear</b></h3></div>
	</div>
    
    <div class="clearfix"></div>

</div>



&nbsp;&nbsp;&nbsp;

				<div class="sorting" style={{marginLeft:"900px"}}>
					<h6>Categorised By</h6>
					<select  class="frm-field required sect" style={{width:"300px"}} onChange={(e)=>{drop(e.target.value)}}>
						{/* <option value="null">All</option> */}
					{ list.map((val,index)=>{
						return(
							
							<option key={index} value={val.cat_id}>{val.cat_name}</option>

						)
						
					})
					}
					</select>

					<div class="clearfix"></div>
				</div>

<div class="men-wear">
	<div class="container">
          
			{/* <div class="sort-grid">
			
			
			<div class="search">
					<input type="search" id="cd"   onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}" required=""/>
					<button type='submit' onClick={Search}>search</button>
				</div> */}
				{/* <div class="clearfix"></div> 
			</div> */}
      
            {view1.map((val) => { 
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
							{/* <span class="product-new-top">New</span>				 */}
					</div>
					<div class="item-info-product ">
                    <h4><Link to='/view' state={{id: val.p_id}} >{val.p_name.substring(0, 35)}</Link></h4>
						<div class="info-product-price">
							<span class="item_price">Rs. {val.p_price}</span>
							
						</div>
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro1(val.p_id)}><BsFillSuitHeartFill />
                        </div>	&nbsp;
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro(val.p_id)}><i class="fa-solid fa-cart-shopping"></i> Add to cart</div>	<ToastContainer
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
            {/* <div class="pagination-grid text-right">
			<ul class="pagination paging">
				<li><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
				<li class="active"><a href="#">1<span class="sr-only">(current)</span></a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
			</ul>
		</div> */}
</div>
<br/>
    </>
  )
}

export default WomenProduct;
