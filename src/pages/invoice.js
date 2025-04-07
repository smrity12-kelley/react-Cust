import React from 'react';
import  { useEffect,useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import Axios from "axios";
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { FcBusinessman } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { CgMail } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";
import axios from 'axios';
import { TbHomeHeart } from "react-icons/tb";
import { IoMdMailUnread } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
function Invoice() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    var email=user.email;
    var name = user.name;

    const location = useLocation();
    const oid = location.state.oid;
    // alert(oid);
   
const[amount,setamount]=useState([]);
const[status, setstatus]=useState([]);
const[date, setdate]=useState([])
const[prodname, setprodname]=useState([])
const[qty, setqty]=useState([])
const[invoice, invoicedet]=useState([])
const[usrr, uerrdata]=useState([])
const[namess,setname]=useState([]);
const[addresss, setadd]=useState([]);
const[numbb, setnum]=useState([])
// alert(amount);
	useEffect(()=>{
		
    if(sessionStorage.getItem("user")===null)

    {

        alert("Please Login to your account....");

        window.location="/";

    }

    else{      

	
 Axios.get('http://localhost:1337/api/getinvoice', {params:{

 email:email,oid:oid}}).then((response)=>{
    invoicedet(response.data)
	
	setamount(response.data[0].payment_amount);
   setstatus(response.data[0].Payment_status);
   setdate(response.data[0].when_oredered);
   setprodname(response.data[0].user_address);
   setqty(response.data[0].qty)


});	


Axios.get('http://localhost:1337/api/user_det', {params:{email:email}}).then((response)=>{
    console.log(response.data)
    uerrdata(response.data)
    setname(response.data[0].user_name);
    setadd(response.data[0]. user_address)
    setnum(response.data[0]. user_number)
 })

}
},[]);


function Export() {
       
    var d = new Date().toLocaleString();
    const s = document.getElementById('download');
    
    const pdf = new jsPDF('l', 'in', [12, 14]);
    if (pdf) {
      domtoimage.toPng(s)
        .then(imgData => {
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = pdfWidth - 2; // 1 inch margin on each side
          const imgHeight = pdfHeight ; // 1 inch margin on top and bottom
          pdf.addImage(imgData, 'PNG', 1, 1, imgWidth, imgHeight);
          pdf.save(d + ".pdf");
        });
    }

}

const calculateTotal = () => {  
    let total = 0;
    invoice.forEach((val) => {
        total += val.qty * val.p_price;
    });
    return total;
};


  const isoDate = new Date(date);
  const day = isoDate.getDate().toString().padStart(2, '0');
  const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
  const year = isoDate.getFullYear().toString().slice(-2); // Extract the last two digits
  const formattedDate = `${day}-${month}-${year}`;
  
  
  return (
    <>
     <div class="page-content container">
    <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
            {/* Invoice            {invoice.map((val) => { 
        return(

			<>
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                ID: #{val.final_id}
            </small>                  </>
            )
          })
          } */}
        </h1>

        <div class="page-tools">
            <div class="action-buttons">
                <button type="button" class="btn bg-white btn-light mx-1px text-95"  onClick={Export} >
                    <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Print
                </button>
                
            </div>
        </div>
    </div>

    <div class="container px-0" id="download">
        <div class="row mt-4">
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                            <span class="text-default-d3"> EraNext</span>
                        </div>
                    </div>
                </div>
             

                <hr class=" mx-n1 mb-4" />

                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            
 <span class="text-200 text-220 text-grey-m2 align-middle"><GrUserExpert   style={{color:"#5509f1"}} />
 <span class="text-600 text-90"> <b>{name}</b></span>
 </span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                          
                            <span class="text-600 text-90"><TfiEmail   style={{color:"#cc0404ab"}} /> <b>{email}</b></span>
                            </div>
                            <div class="my-1">
                            <TbHomeHeart   style={{color:"green"}} />
                            <span class="text-600 text-90"> <b>{addresss}</b></span>
                            </div>
                     
                            <div class="my-1"> 
                              
                                 <span class="text-600 text-90"> <LuPhoneCall  style={{color:"#e511b0cc"}} /><b>{numbb}
                                    </b></span></div>
                        </div>
                    </div>
                   

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                            <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Invoice
                            </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> <b>{oid}</b></div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> {formattedDate}
</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-success badge-pill px-25">{status}</span></div>
                        </div>
                    </div>
                    
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
                <div class="mt-4">
                    <div class="row text-600 text-wh bgc-default-tp1 py-25">
                        <div class="d-none d-sm-block col-1">#</div>
                        <div class="col-9 col-sm-5">Description</div>
                        <div class="d-none d-sm-block col-4 col-sm-2" style={{textAlign:"center"}}>Qty</div>
                        <div class="d-none d-sm-block col-sm-2" style={{textAlign:"center"}}>Unit Price</div>
                        <div class="col-2">Amount</div>
                    </div>

                    <div class="text-95 text-secondary-d3">
                    {invoice.map((val ,index) => { 
        return(

			<>
                        <div class="row mb-2 mb-sm-0 py-25">
                            <div class="d-none d-sm-block col-1">{index+1}</div>
                            <div class="col-9 col-sm-5">{val.p_name}</div>
                            <div class="d-none d-sm-block col-2">{val.qty}</div>
                            <div class="d-none d-sm-block col-2 text-95">Rs.{val.p_price}</div>
                            <div class="col-2 text-secondary-d2">Rs.{val.p_price  * val.qty}</div>
                        </div>
                        </>
            )
          })
          }
           
            
                    </div>

                    <div class="row border-b-2 brc-default-l2"></div>

                    <hr class=" mx-n1 mb-4" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="row mt-3">
                        <div class="col-12 col-sm-9 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>

        
                        <div class="col-12 col-sm-3 text-grey text-90 order-first order-sm-last">
          
                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    SubTotal:
                                </div>&nbsp;&nbsp;
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">Rs. {calculateTotal()}</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Delivery Charges:
                                </div>&nbsp;&nbsp;
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">Free</span>
                                </div>
                            </div>
                            <div></div>
                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Amount:
                                </div>&nbsp;&nbsp;
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">Rs.{calculateTotal()}</span>
                                </div>
                            </div>
                        </div>

                 
                    </div>
                  
                   
                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105">Thank you for your business !!</span>
                 
                    </div>
                </div>
              
           <br/><br/><br/><br/> 
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Invoice;

