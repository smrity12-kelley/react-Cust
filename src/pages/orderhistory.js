import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Orderhistory(){


let user = JSON.parse(sessionStorage.getItem("user"));
const [email,setemail] = useState(user.email);
const [list, setlist] = useState(['']);
useEffect(()=>{

	axios.get("http://localhost:1337/api/fetchorder",{params:{email:email}}).then((Response)=>{
		setlist(Response.data);
})
},[])


    return(
        <>
                <div class="checkout">
	<div class="container">
		<h3>My Order History</h3>
		<div class="table-responsive checkout-right animated wow slideInUp" data-wow-delay=".5s">
			<table class="timetable_sub">
				<thead>
					<tr>
						<th>SR. no.</th>
						<th>Order ID</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>when Ordered</th>
                        <th>View Invoice</th>
					</tr>
				</thead>
			
			{
				list.map((val,index)=>{

					return(
						<>
						<tr class="rem1">
			
			<td class="invert-closeb" key={index}>
				<div class="rem">
						{index+1}.
				</div>
				
			</td>

			<td class="invert-closeb">
				<div class="rem">
			{val.order_id}			
				</div>
				
			</td>
			
			<td class="invert-image"><div class="men-thumb-item">		
				{val.qty_count}	
			</div></td>
			
			<td class="invert">
			Rs. {val.payment_amount}
			</td>
			
			<td class="invert">{new Date(val.when_oredered).toLocaleDateString('en-US')}</td>
			
			<td class="invert">
			<Link to="/invoice" state={{ oid: val.order_id }}>
			  <button type="button" style={{color:"White", backgroundColor:"#3498db", height:"40px"}}  >
			 View Invoice <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
				 </button>
			 </Link>
			</td>
			</tr>						
						</>
					)
				})
			}
							
								
			</table>
		</div>
        </div></div>
        </>
    )
}export default Orderhistory