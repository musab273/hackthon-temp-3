import { groq } from "next-sanity";


export const allProduct = groq`*[_type == "allProduct"]`
export const three =groq `*[_type =="product"][0..3]`