import React  from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useForm, watch } from 'react-hook-form';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { BsSearchHeart } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BsFillSuitHeartFill } from "react-icons/bs";

function Header(){
//const[count,setcount]=useState();	
	
	let user=JSON.parse(sessionStorage.getItem("user"));
	const user_email= user?user.email:null
function reg_submit(){
var name=document.getElementById("name").value;
//alert(name);

var num=document.getElementById("number").value;
//alert(num);

var add=document.getElementById("address").value;
//alert(add);
var email=document.getElementById("email").value;
//alert(email);
var password=document.getElementById("password").value;
//alert(password);

Axios.post('http://localhost:1337/api/insert',
{name:name,number:num,address:add,email:email,password:password }).then((response)=>{
if(response.data.message)
{
alert(response.data.message);
window.location = "/signup"
}
else{

console.log(response);
alert('User Registred Successfully');
window.location = "/"
}

});


}

 
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


function login_submit(e){

	e.preventDefault();
	var email=document.getElementById("email1").value;
    //alert(email);
	var password=document.getElementById("password1").value;
//	alert(password);
	
	Axios.post('http://localhost:1337/api/login',
	{email:email,password:password }).then((response)=>{
	if(response.data.message)
	{
	alert(response.data.message);
	window.location = "/"
	}
	else{
	
	//console.log(response);

	let obj={name:response.data[0].user_name,email:email,uid:response.data[0].user_id}
	sessionStorage.setItem("user",JSON.stringify(obj));
	alert(" Logged in Sucessfully!");

	window.location = "/"
	}
	
	});




}




	function logout()
	
	{
		window.location="/";
		alert("You are logged out !");
		sessionStorage.clear();

	// showToastMessage1();
	 
	
	}
	
	//Total Products in Cart
 function Update (){

if(sessionStorage.getItem("user")===null)
{

		alert("Please Login to your account....");
		window.location="/"
}
else{
let user = JSON.parse(sessionStorage.getItem("user"));
	  var email=user.email;
var name=document.getElementById("updatename").value;


var num=document.getElementById("updatenumb").value;
//alert(num);

var add=document.getElementById("updateaddd").value;
//alert(add);


	  
Axios.post('http://localhost:1337/api/edit',
 {name:name,num:num,add:add,email:email}).then((response)=>{
	if(response.data.message)
  
  
	{
	    alert(response.data.message);
	
sessionStorage.clear()
window.location="/"
	}

 
});	
}
	
}


function Updatepass (){


let user = JSON.parse(sessionStorage.getItem("user"));
 var email=user.email;

var oldpass=document.getElementById("oldpass").value;
//alert(name);

var newpass=document.getElementById("newpass").value;
//alert(num);

	if(newpass == oldpass){
alert("both password can not be same")

	}

else{
	Axios.post('http://localhost:1337/api/updatepass',
	{oldpass:oldpass,newpass:newpass,email:email}).then((response)=>{
	  if(response.data.message)
	 {
		alert(response.data.message);
		sessionStorage.clear()
window.location="/"
	}});	
	}
}





//search
const[view,setview]=useState([]);


function Search() {

	var data = document.getElementById('info').value;


	Axios.post('http://localhost:1337/api/search',
	{

		udata:data
	}).then((response) => {

		if (response.data==0) {
			
			
		}
	
else{


if(data ==0){



}
else{

	console.log(response.data)
setview(response.data)
}
}
//toast.dismiss();
		
	});

  }
 





const {
    register,
	watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  
  const [list , setCatList] = useState(['']);

  useEffect(() => {
	Axios.get('http://localhost:1337/api/fetchcatwomen').then((response) => {
		setCatList(response.data); // Assuming the response is an array of categories
	}).catch(error => {
		console.error('Error fetching categories:', error);
	});
  }, []);

  

  const [list2 , setCatList2] = useState(['']);

  useEffect(() => {
	Axios.get('http://localhost:1337/api/fetchcatmen').then((response) => {
		setCatList2(response.data); // Assuming the response is an array of categories
	}).catch(error => {
		console.error('Error fetching categories:', error);
	});
  }, []);



const[dataa, setuserprofile]=useState([])
  function editprofile(){


Axios.post('http://localhost:1337/api/fatchprofile',{email:user_email}).then((response) => { 
setuserprofile(response.data)


},[])

  }
return(
<>

<div className="header" style={{ marginTop: '-16px', padding: '10px', backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <div className="header-left" style={{ flex: 1 }}>
          <h1 style={{ margin: 0, color: '#343a40', fontSize: '24px', fontWeight: 'bold' }}>EraNext Shopping Hub</h1>
        </div>

        {/* Search Section */}
        <div className="header-middle" style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="search" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <input
              type="search"
              id="info"
              placeholder="Search"
              style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
            <button
              onClick={Search}
              data-toggle="modal"
              data-target="#myModal10"
              style={{ marginLeft: '10px', padding: '8px 12px', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              className="item_add single-item1 hvr-outline-out button2"
            >
              <BsSearchHeart size={20} />
            </button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
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

        {/* Contact Section */}
        <div className="header-right" style={{ flex: 1, textAlign: 'right' }}>
          <a href="mailto:info@example.com" style={{ color: '#007bff', textDecoration: 'none', fontSize: '16px' }}>
            <span className="glyphicon glyphicon-envelope" aria-hidden="true" style={{ marginRight: '5px' }}></span>
            info@EraNextShoppingHub.com
          </a>
        </div>
      </div>
    </div>


	
<div class="ban-top">



	<div class="container">
		<div class="top_nav_left">
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				</div>
				
			
		
	

				<div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav menu__list">
					<li class="active menu__item menu__item--current"><a class="menu__link" href="/">Home <span class="sr-only">(current)</span></a></li>


					<li class="active menu__item "><Link class="menu__link"  to='/pro' state={{name:"All"}}>Men's</Link></li>
					<li class="active menu__item "><Link class="menu__link"  to='/pro1' state={{name:"All"}}>WoMen's</Link></li>

					
					{/* <li class=" menu__item"><a class="menu__link" href="/lug">Luggage</a></li>
					<li class=" menu__item"><a class="menu__link" href="/gift">Gift Combos</a></li> */}
					<li class=" menu__item"><a class="menu__link" href="/contact">contact</a></li>
				  </ul>
				</div>
			  </div>
			</nav>	
		</div>



		<div style={{display:"flex", gap:"170px"}}>
						<h3> 
							{ sessionStorage.getItem("user") != null?
							<>
							<div class="top_nav_right">

							<li class="dropdown menu__item"  style={{height:"50px",width:"210px", marginLeft:"180px"}}>
								<a href="#" class="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{marginTop:"8px",textDecoration:"none"}}><b>
								<i class="fa-solid fa-user"></i> {user.name}</b><span class="caret"></span></a>
							<ul class="dropdown-menu multi-column columns-2" style={{width:"310px"}}>
								<div class="row">
								<div class="col-sm-3 multi-gd-img" style={{marginLeft:"28px"}}>
										<ul class="multi-column-dropdown">
											<li><Link to='/cart'><font color="black" size="3"><i class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></i> Cart</font></Link></li>
											<li><Link to='/orderhistory' ><font color="black" size="3">My Orders</font></Link></li>
											<li><Link to='/wish' ><font color="black" size="3">Wishlist</font></Link></li>
											<li><a href="#" class="use1" data-toggle="modal" data-target="#myModal7" onClick={editprofile}><span><b>Edit Profile</b></span></a></li>	
											 <button type="button" class="btn btn-outline-secondary"  onClick={()=>editprofile()}  data-target="#myModal7" data-toggle="modal"style={{height:"50px",width:"50px"}}><i class="fa fa-pencil"></i></button>										 
										</ul>
									</div>
								</div>
							</ul>
							</li>
					</div>


							</>
							:
							<>
							
							</>
							}

								
							</h3>
		<div class="col-md-3 di header-right footer-bottom">
			<ul style={{marginTop:"0px"}}>
				{ sessionStorage.getItem("user") === null ?

				<>
				<li style={{display:"flex",marginLeft:"450px"}}><a href="#" data-toggle="modal" data-target="#myModal4"><i class="fa-solid fa-circle-user fa-sm" style={{color: "white",marginLeft:"-38px", marginTop:"33px"}}></i> <font style={{color:"white",fontSize:"20px"}} > Login</font></a>
				</li>
				
				</>
				:
				<>
				{/* <li style={{color:'white'}}><h4> <b>Welcome {user.name}!</b> </h4></li>  */}
		
			    <li ><a href="#" class="use2" data-toggle="modal" data-target="#myModal6" style={{color:'white',marginLeft:"140px"}}><b><font  color="white" size="4" >Logout</font></b></a></li> 
				
				</>
				}
			 </ul>
			 </div>
		<div class="clearfix"></div>
        </div>
						
					
						<p><a href="/cart" class="simpleCart_empty"></a></p>
						
			</div>	
		</div>
		<div class="clearfix"></div>
	
		<div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content modal-info">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body modal-spa">
                <div class="login-grids">
                    <div class="login">
                        <div class="login-bottom">
                            <h3>Sign up for free</h3>
                            <form onSubmit={handleSubmit(reg_submit)}>
                                <div class="sign-up">
                                    <h4>Name :</h4>
                                    <input {...register('name', { required: true , minLength: 1})} name='name' type="text" placeholder='Enter Name' id="name"/>
                                    {errors.name && <span className="error" style={{ color: 'red' }}>User Name is required.</span>}  
                                </div>&nbsp;
                                <div class="sign-up">
                                    <h4>Mobile Number :</h4> &nbsp;
                                    <input {...register('mobile', { required: "Mobile number is required.", 
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Mobile number must start with 6, 7, 8, or 9 and be exactly 10 digits long."
                                        } })} name='mobile' type="tel" placeholder='Enter Number' id="number" class="form-control"/>
                                    {errors.mobile && <span className="error" style={{ color: 'red' }}>{errors.mobile.message}</span>}
                                </div>&nbsp;
                                <div class="sign-up">
                                    <h4>Address :</h4>&nbsp;
                                    <input {...register('adds', { required: true , minLength: 5 })} type="address" placeholder='Enter Address' name='adds' id="address" class="form-control"/>
                                    {errors.adds && <span className="error" style={{ color: 'red' }}>Address is required.</span>}
                                </div>&nbsp;
                                <div class="sign-up">
                                    <h4>Email :</h4>&nbsp;
                                    <input {...register('email', { required: "Email Id is required.", 
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please give email in 123@xyz.com format."
                                        } })} name="email" type="email" placeholder='Enter Email' id="email" class="form-control"/>
                                    {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email.message}</span>}
                                </div>&nbsp;
                                <div class="sign-up">
                                    <h4>Password :</h4>
                                    <input {...register("password", { 
                                        required: "Password is must be required.",
                                        pattern: {
                                            value: /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
                                            message: "Password must contain at least one special character, one digit, one letter, and be at least 8 characters long."
                                        }
                                    })} name="password" type="password" placeholder='Enter Password' id="password"/>
                                    {errors.password && <span className="error" style={{ color: 'red' }}>{errors.password.message}</span>}
                                </div>&nbsp;

                                <div class="sign-up">
                                    <input type="submit" value="REGISTER NOW" />
                                </div>

                            </form>
                        </div>
                        <div class="login-right">
                            <h3>Sign in with your account</h3>
                            <form onSubmit={login_submit}>
                                <div class="sign-in">
                                    <h4>Email :</h4>&nbsp;
                                    <input type="email" placeholder='Enter Email' required id="email1" class="form-control"/>  
                                </div>&nbsp;
                                <div class="sign-in">
                                    <h4>Password :</h4>
                                    <input type="password" placeholder='Enter Password' required id="password1"/>
                                    <a href="/forgotpassword">Forgot password?</a>
                                </div>
                                <div class="sign-in">
                                    <input type="submit"   value="SIGNIN" />
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
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
                            </form>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <p>By logging in you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    </div>
</div>


  
<div class="modal fade" id="myModal7" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content modal-info">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
						</div>
						<div class="modal-body modal-spa">
							<div class="login-grids">
							{dataa.map((val)=>{
												return(
													<>
								<div class="login">
								
									<div class="login-bottom">
										<h3>Edit Profile </h3>
										<form onSubmit={Update}>

										
												
											<div class="sign-up">
												<h4>Name :</h4>
												<input type="text" defaultValue={val.user_name} placeholder='Enter Name' required id="updatename" style={{color:"black"}}/>	
											</div>
											<div class="sign-up">
												<h4>Number :</h4>
												<input type="text" placeholder='Enter Number' defaultValue={val.user_number} required id="updatenumb" style={{color:"black"}}/>	
											</div>
											<div class="sign-up">
												<h4>Address :</h4>
												<input type="text" placeholder='Enter Address'defaultValue={val.user_address} required id="updateaddd" style={{color:"black"}}/>	
											</div>
											<div class="sign-up">
												<h4>Email :</h4>
												<input type="text" placeholder='Enter Email' value={val.user_email} required id="email" style={{color:"black"}}/>	
											</div>
											
											<div class="sign-up">
												<input type="submit"  value="update" />
											</div>
											
										</form>
									</div>
									<div class="login-right">
										<h3>Change Password</h3>
										<form onSubmit={Updatepass} >
											<div class="sign-in">
												<h4>Email :</h4>
												<input type="text" value={val.user_email} placeholder='Enter Email' required id="email2"  style={{color:"black"}}/>	
											</div>
											<div class="sign-in">
												<h4>Old Password ::</h4>
												<input type="password" placeholder='Enter Password' required id="oldpass"  style={{color:"black"}}/>	
											</div>
											<div class="sign-in">
												<h4>New Password :</h4>
												<input type="password" placeholder='Enter Password' required id="newpass"  style={{color:"black"}}/>
												{/* <a href="/forgotpassword">Forgot password?</a> */}
											</div>
											<div class="single-bottom">
												<input type="checkbox"  id="brand" value=""/>
												<label for="brand"><span></span>Remember Me.</label>
											</div>
											<div class="sign-in">
												<input type="submit"   value="Update" />		
										</div>
										</form>
									</div>
									<div class="clearfix"></div>
								</div>
								</>
												)
											})}
								<p>By logging in you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></p>
                                </div>
						</div>
					</div>
				</div>
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
		<input type="submit" onClick={event =>{logout()}} value="Logout"/>&nbsp;<input type="submit" value="Cancel"/>
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



<div class="modal fade" id="myModal10" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
				
						
{view.map((val) => { 
        return(
                <>
                	<div class="col-md-3 product-men">
				<div class="men-pro-item simpleCart_shelfItem">

			
                 
					<div class="men-thumb-item">
						<img src={"http://localhost:1337/public/"+val.p_image}  class="pro-image-front" />
						<img src={"http://localhost:1337/public/"+val.p_image2}  class="pro-image-back" />
							
						
							<div class="men-cart-pro">
								<div class="inner-men-cart-pro">
								<Link to={`/view/${val.p_id}`} class="link-product-add-cart" data-dismiss="modal"  >Quick View</Link>
								</div>
								




							</div>
							<span class="product-new-top">New</span>				
					</div>
					<div class="item-info-product ">
					<h4 ><Link to={`/view/${val.p_id}`}   >{val.p_name.substring(0, 25)}</Link></h4>
						<div class="info-product-price">
							<span class="item_price">&#x24;{val.p_price}</span>
							
						</div>
						
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro1(val.p_id)} style={{marginBottom:"7px"}}><BsFillSuitHeartFill />
                        </div> &nbsp;
						<div class="item_add single-item hvr-outline-out button2" onClick={()=>onpostpro(val.p_id)}><i class="fa-solid fa-cart-shopping"></i> Add to cart</div>	
					</div>
				</div>
                </div>
                </>  
            )})
}



					
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


export default Header;