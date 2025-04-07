import React from 'react';
import Axios from 'axios';
import  { useEffect,useState} from "react";
import { useLocation,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';
import { BsFillSuitHeartFill } from "react-icons/bs";
// import "../../public/assests/images/men2.jpg";
	
// const imgss as "../../public/assests/images/men2.jpg"
function Test() {


	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);
	const[view1,setview1]=useState([]);
	const[review,setreview]=useState([]);
 
	const {id }= useParams();
    const urlid = 5;

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
const [hoveredImage, setHoveredImage] = useState(null);
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
const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  return (
    <>
      
      <div class="page-head">
	  <div class="container" style={{opacity:"0.7"}}>	
	<div style={{backgroundColor:"white"}}><h3 style={{color:"#58769E"}}><b>Quick View</b></h3></div>
	</div>
</div>
<div className="single">
  <div className="container">
    {view1.map((val, index) => (
      <div className="col-md-6 single-right-left animated wow slideInUp animated" data-wow-delay=".5s" key={index}>
        <div className="grid images_3_of_2">
          <div className="flexslider">
            <ul className="slides">
              <li data-thumb="images/d2.jpg" style={{ listStyle: "none" }}>
                <div className="thumb-image">
                  <Carousel>
                    <div>
                      <div className="col-md-6 single-right-left animated wow slideInUp animated">
                        <div className="grid images_3_of_2">
                          <div className="flexslider">
                            <ul className="slides">
                              <li data-thumb="images/d2.jpg" style={{ listStyle: "none" }}>
                                <div className="thumb-image">
                                  <ReactImageMagnify
                                    {...{
                                      smallImage: {
                                        alt: `Image ${index + 1}`,
                                        isFluidWidth: true,
                                        src: `http://localhost:1337/public/${val.p_image}`
                                      },
                                      largeImage: {
                                        src: `http://localhost:1337/public/${val.p_image}`,
                                        width: 1200,
                                        height: 1500
                                      },
                                      onMouseEnter: () => setHoveredImageIndex(index),
                                      onMouseLeave: () => setHoveredImageIndex(null)
                                    }}
                                  />
                                </div>
                              </li>
                              <li data-thumb="images/d2.jpg" style={{ listStyle: "none" }}>
                                <div className="thumb-image">
                                  <ReactImageMagnify
                                    {...{
                                      smallImage: {
                                        alt: `Image ${index + 1}`,
                                        isFluidWidth: true,
                                        src: `http://localhost:1337/public/${val.p_image2}`
                                      },
                                      largeImage: {
                                        src: `http://localhost:1337/public/${val.p_image2}`,
                                        width: 1200,
                                        height: 1500
                                      },
                                      onMouseEnter: () => setHoveredImageIndex(index),
                                      onMouseLeave: () => setHoveredImageIndex(null)
                                    }}
                                  />
                                </div>
                              </li>
                              <li data-thumb="images/d2.jpg" style={{ listStyle: "none" }}>
                                <div className="thumb-image">
									<ReactImageMagnify
										{...{
										smallImage: {
											alt: `Image ${index + 1}`,
											isFluidWidth: true,
											src: `http://localhost:1337/public/${val.p_image3}`,
											
										},
                                      largeImage: {
                                        src: `http://localhost:1337/public/${val.p_image3}`,
                                        width: 1200,
                                        height: 1500
                                      },
                                      onMouseEnter: () => setHoveredImageIndex(index),
                                      onMouseLeave: () => setHoveredImageIndex(null)
                                    }}
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Result Section */}
        {hoveredImageIndex === index && index === 2 && (
          <div className="result-section">
            <h3>Result Section {index + 1}</h3>
            <img src={`http://localhost:1337/public/${val.p_image3}`} alt={`Result Image ${index + 1}`} className="img-responsive" />
            {/* Add other result section content here */}
          </div>
        )}
      </div>
    ))}
  </div>
</div>







    </>
  )
}

export default Test;
