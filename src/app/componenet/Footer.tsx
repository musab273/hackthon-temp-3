import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
    return(

    <div>

<footer className="bg-black text-white px-6 py-6">
<div>
                    <div className="grid grid-flow-col bg-black text-white">
                        <ul className="grid pb-8 pt-8 ml-12">
                            <li className="pt-4">Find A Store</li>
                            <li className="pt-2">Become A Member</li>
                            <li className="pt-2">Sign Up for Email</li>
                            <li className="pt-2">Send Us Feedback</li>
                            <li className="pt-2">Student Discounts</li>
                        </ul>
                        <ul className="pt-10 ml-12">
                            <li>Get Help</li>
                            <li className="pt-4">Order Status</li>
                            <li className="pt-2">Delivery</li>
                            <li className="pt-2">Returns</li>
                            <li className="pt-2">Payment Options</li>
                            <li className="pt-2">Contact Us On Nike.com Inquiries</li>
                            <li className="pt-2">Contact Us On All Other Inquiries</li>
                        </ul>
                        <ul className="pt-8 ml-12">
                            <li className="pt-4">About Nike</li>
                            <li className="pt-2">News</li>
                            <li className="pt-2">Careers</li>
                            <li className="pt-2">Investors</li>
                            <li className="pt-2">Sustainability</li>
                        </ul>
                        <ul className="flex pt-10 gap-3">
                            <li>
                                <AiFillTwitterCircle/>
                            </li>
                            <li>
                                <CiFacebook/>
                            </li> 
                            <li>
                             <TiSocialYoutubeCircular/>
                            </li>
                            <li>
                            <TiSocialInstagram/>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-black w-full pt-20 ">
                    <ul className="flex text-white ml-12 gap-6 pb-6">
                        <li>
                    <MdLocationOn />
                    </li>
                    <li>India</li>
                    <li>© 2023 Nike, Inc. All Rights Reserved</li>

                        
                    </ul>
                    </div>
                 
                


                </div>
      </footer>
    </div>
    );
};

export default Footer;