import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function JoinUs(){
    return(
        <div className="h-full w-full">

            <div className="flex justify-center w-324px h-17px">
            <img src="/Frame1.png" width="" height="" alt="nike"></img>
            </div>

            <div className="flex justify-center text-black text-center font-bold w-231.22px h-31px top-46px left-46.48px items-center">
                <h1 className="mt-4">Become A Nike Member</h1>
            </div>

            <div className="grid justify-center items-center mt-5">
                <p>Create your Nike Member profile and get</p>
                <p className="mr-4 ml-4">first access to the very best of Nike</p>
                <p className="mr-3 ml-3"> products, inspiration and community.</p>
            </div>

            <div className="w-324 h-561 top-210 left-28">
            <form className="grid justify-center w-380px h-388px top-96px left-515.5px mt-4 mr-2 ">
               <input type="Email" placeholder="Email Address" className="border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
               <input type="Password" placeholder="Password"className="border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
               <input type="First Name" placeholder="First Name"className="border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
               <input type="Last Name" placeholder="Last Name"className="border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
               <input type="Date of Birth" placeholder="Date of Birth"className="border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
               <p className="mt-2 mr-12 ml-12 text-sm">Get a Nike Member Reward every year on your Birthday.</p>
               <select className="border-2 pt-1 pb-1 pl-6 pr-6 mt-6 rounded-sm mr-10 ml-10 ">
                <option>Pakistan</option>
                <option>Japan</option>
                <option>USA</option>
                <option>Canada</option>
                <option>India</option>
               </select>
                <div>
                    <ul className="flex mt-5 ml-5 gap-3 ">
               <Button className="flex w-44 h-11 ml-4 mr-3 border-1 bg-white text-black">Male</Button>
               <Button className="flex w-44 h-11 ml-4 mr-3 border-1 bg-white text-black">Female</Button>
               </ul>
               </div>
               <div className="">
            
                    <input type="checkbox" className="w-8 h-8 mt-6 ml-8"></input>
                </div>

                <div>
                <p className="ml-10 mt-3">By creating an account, you agree to Nike's Privacy</p> 
                <p className="ml-28 ">Policy and Terms of Use.</p>
            </div>

            <Button className="w-96 mt-6 ml-10">JOIN US</Button>

            <div>
            <ul className="flex justify-center mt-6">
            Already a Member?
            <li><Link href="/SignIn">SigIn</Link></li>
           </ul>
            </div>
            </form>

            
            </div>
            
            
        </div>
    )
}



