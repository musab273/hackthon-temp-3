import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";

import Image from "next/image";
import React,{useEffect,useState} from "react"
import { allProduct } from "@/sanity/lib/queries";

const shoes=() => {
    const[Product, setproduct]=useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedproduct: Product[]=await client.fetch(allProduct)
        }
        fetchproduct()
    },[])
return (
    <div></div>
    )
}

export default shoes;