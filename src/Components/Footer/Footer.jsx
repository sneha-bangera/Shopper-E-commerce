import React from "react";
import './Footer.css';
import footer_icons from '../Assets/footer_icons.jpg';
import logo from '../Assets/logo.png';

function Footer() {

    // function backToTop(){
    //     document.body.scrollTop=0;
    //     document.documentElement.scrollTop=0;
    //     document.body.style.transitionProperty="all"
    //   }

    return (
      <div className="footer">
        {/* <div class="foot_panel1" onclick={backToTop}>
            <p>Back to Top</p>
        </div> */}

        <div class="foot_panel2">
            <ul>
                <p>ONLINE SHOPPING</p>
                <a>Men</a>
                <a>Women</a>
                <a>Kids</a>
                <a>Beauty</a>
                <a>Home & Living</a>
                <a>Gift Cards</a>
            </ul>

            <ul>
                <p>CUSTOMER POLICIES</p>
                <a>Contact Us</a>
                <a>FAQ</a>
                <a>T&C</a>
                <a>Track Orders</a>
                <a>Shipping</a>
                <a>Cancellations</a>
                <a>Returns</a>
                <a>Privacy Policy</a>
            </ul>

            <ul>
                <p> USEFUL LINKS</p>
                <a>Blog</a>
                <a>Carrers</a>
                <a>Site Map</a>
                <a>Corporate Information</a>
                <a>Whitehat</a>
                <a>Cleartrip</a>
            </ul>

            <ul>
                <p>KEEP IN TOUCH</p>
                <img src={footer_icons} alt="" />
            </ul>
        </div>

        <div class="foot_panel3">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
        </div>

        <div class="foot_panel4">
            <div class="pages">
                <a>Condition of Use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Privacy Choices</a>
            </div>
            <div class="copyright">
                <a>Copyright @2024 - All Rights Reserved.</a>
            </div>
        </div>
        
      </div>
    )
  }
  export default Footer;