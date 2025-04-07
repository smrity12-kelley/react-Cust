import React from 'react';
import { Link } from 'react-router-dom';
function Footer()

{
	const currentYear = new Date().getFullYear();
return(
<>


<div class="footer">
	<div class="container">
		<div class="col-md-3 footer-left">
			<a href="/"><img src="./assests/images/l1.webp" wight="300" height="300" alt=" " /></a>
			
		</div>
		
		<div class="col-md-9 footer-right">
			<div class="col-sm-14 newsleft">
				
			
			<div class="clearfix"></div>
			
				<div class="col-md-4 sign-gd">
					<h4>Information</h4>
					<ul>
						<li><a href="/">Home</a></li>
						<Link   to='/pro' state={{name:"All"}}><li><a href="/pro">Men's Wear</a></li></Link>
						
			
							<li>	<Link   to='/pro1' state={{name:"All"}}><a href="/pro1"  state={{name:"All"}}>Women's Wear</a></Link></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
	
				<div class="col-md-8 sign-gd-two">
					<h4>Store Information</h4>
					<ul>
						<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Correspondence address :    ul. Fiołkowa 44  

<span>   	Warsaw, Poland</span></li>
						<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>Email : <a href="mailto:info@example.com">info@EraNextShoppingHub.com</a></li>
						<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>tel :  (+48) 22 55 54 153</li>
					</ul>
				</div>
			
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="clearfix"></div>
		<p class="copy-right"> {currentYear} EraNext Shopping Hub. </p>
	</div>
</div>


</>    

);




}
export default Footer;