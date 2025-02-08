import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignIn(){
    return(
       <div>

         <div className="flex justify-center w-324px h-17px">
            <img src="/Frame1.png" width="" height="" alt="nike"></img>
         </div>

                <div className="flex justify-center text-black text-center font-bold items-center">
                <h1 className="mt-4 text-3xl">YOUR ACCOUNT<br/> FOR EVERYTHING<br/> NIKE</h1>
                </div>

            <div  className=" flex justify-center mt-5">
            <form className="grid">
            <input type="Email" placeholder="Email Address" className="w-96 h-14 border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
            <input type="Password" placeholder="Password"className=" w-96 h-14 border-2 pt-1 pb-1 pl-6 pr-6 mt-2 rounded-sm mr-10 ml-10 "/>
            </form>
            </div>
           
            <div className="flex justify-center mt-4">
                <input type="checkbox" className="w-8 h-6 ml-ml-5"></input><h1 className="mr-12 ml-2">keep me signed in</h1> <h1>forgotten password?</h1>
             </div>
            
            <div className="grid justify-center mt-5 text-sm">
               <p className="ml-12">By logging in, you agree to Nike's Privacy Policy</p>
               <p className="ml-32"> and Terms of Use.</p>

               <Button className="w-96 mt-6">JOIN US</Button>

               
            <div>
            <ul className="flex justify-center mt-6 gap-2">
            Already a Member?
            <li><Link href="/JoinUs">JoinUs</Link></li>
           </ul>
            </div>

               
            </div>
            
           
           

       </div>
    )
}