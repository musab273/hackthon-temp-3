import Link from 'next/link';
import { useRouter } from 'next/router';

const products = [
    { id: 1, name: "Nike Air Force 1 Mid '07", image: "/Rectangle (30).png", price: "MRP : ₹ 10 795.00", category: "Men's Shoes", details: "1 Colour" },
    { id: 2, name: "Nike Court Vision Low Next Nature", image: "/Rectangle.png", price: "MRP : ₹ 4 995.00", category: "Men's Shoes", details: "1 Colour" },
    { id: 3, name: "Nike Air Force 1 PLT.AF.ORM", image: "/Rectangle (1).png", price: "MRP : ₹ 8 695.00", category: "Women's Shoes", details: "1 Colour" },
    { id: 4, name: "Nike Air Force 1 React", image: "/Rectangle (4).png", price: "MRP : ₹ 13 295.00", category: "Men's Shoes", details: "1 Colour" },
    { id: 5, name: "Air Jordan 1 Elevate Low", image: "/Rectangle (3).png", price: "MRP : ₹ 11 895.00", category: "Women's Shoes", details: "1 Colour" },
    { id: 6, name: "Nike Standard Issue", image: "/Rectangle (2).png", price: "MRP : ₹ 2 895.00", category: "Women's Basketball Jersey", details: "1 Colour", },
    { id: 7, name: "Nike Dunk Low Retro SE", image: "/Rectangle (7).png", price: "MRP : ₹ 9 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 8, name: "Nike Dri-FIT UV Hyverse", image: "/Rectangle (6).png ", price: "", category: "Men's Short-Sleeve Graphic Fitness Top", details: "1 Colour", },
    { id: 9, name: "Nike Court Vision Low", image: "/Rectangle (5).png", price: "MRP : ₹ 5 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 10, name: "Nike Dri-FIT Ready", image: "/Rectangle (10).png", price: "MRP : ₹ 2 495.00", category: "Men's Short-Sleeve Fitness Top", details: "3 Colours", },
    { id: 11, name: "Nike One Leak Protection: Period", image: "/Rectangle (9).png", price: "MRP : ₹ 3 395.00", category: "Women's Mid-Rise 18cm (approx.) Biker Shorts", details: "2 Colours", },
    { id: 12, name: "Nike Air Force 1 LV8 3", image: "/Rectangle (8).png", price: "MRP : ₹ 7 495.00", category: "Older Kids' Shoe", details: "1 Colour", },
    { id: 13, name: "Nike Blazer Low Platform", image: "/Rectangle (13).png", price: "MRP : ₹ 8 195.00", category: "Women's Shoes", details: "1 Colour", },
    { id: 14, name: "Nike Air Force 1 '07", image: "/Rectangle (12).png", price: "MRP : ₹ 8 195.00", category: "Women's Shoe", details: "2 Colours", },
    { id: 15, name: "Nike Pro Dri-FIT", image: "/Rectangle (11).png", price: "MRP : ₹ 1 495.00", category: "Men's Tight-Fit Sleeveless Top", details: "1 Colour", },
    { id: 16, name: "Nike Dunk Low Retro", image: "/Rectangle (16).png", price: "MRP : ₹ 8 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 17, name: "Nike Air Max SC", image: "/Rectangle (15).png", price: "MRP : ₹ 5 995.00", category: "Women's Shoes", details: "2 Colours", },
    { id: 18, name: "Nike Dri-FIT UV Miler", image: "/Rectangle (14).png", price: "MRP : ₹ 1 695.00", category: "Men's Short-Sleeve Running Top", details: "1 Colour", },
    { id: 19, name: "Nike Air Max SYSTM", image: "/Rectangle (19).png", price: "MRP : ₹ 6 495.00", category: "Older Kids' Shoes", details: "1 Colour", },
    { id: 20, name: "Nike Alate All U", image: "/Rectangle (18).png", price: "MRP : ₹ 2 195.00", category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra", details: "1 Colour", },
    { id: 21, name: "Nike Court Legacy Lift", image: "/Rectangle (17).png", price: "MRP : ₹ 7 495.00", category: "Women's Shoes", details: "2 Colours", },
    { id: 22, name: "Nike Swoosh", image: "/Rectangle (22).png", price: "MRP : ₹ 3 095.00", category: "Women's Medium-support Padded Sports Bra Tank", details: "2 Colours", },
    { id: 23, name: "Nike SB Zoom Janoski OG+", image: "/Rectangle (21).png", price: "MRP : ₹ 8 595.00", category: "Shoes", details: "1 Colour", },
    { id: 24, name: "Nike Dri-FIT Run Division Rise 365", image: "/Rectangle (20).png", price: "MRP : ₹ 3 495.00", category: "Men's Running Tank", details: "2 Colours", },
    { id: 25, name: "Nike Dri-FIT Challenger", image: "/Rectangle (25).png", price: "MRP : ₹ 2 495.00", category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", details: "1 Colour", },
    { id: 26, name: "Jordan Series ES", image: "/Rectangle (24).png", price: "MRP : ₹ 7 495.00", category: "Men's Shoes", details: "2 Colours", },
    { id: 27, name: "Nike Outdoor Play", image: "/Rectangle (23).png", price: "MRP : ₹ 3 895.00", category: "Older Kids' Oversized Woven Jacket", details: "1 Colour", },
    { id: 28, name: "Nike Sportswear Trend", image: "/Rectangle (27).png", price: "MRP : ₹ 2 495.00", category: "Older Kids' (Girls') High-waisted Woven Shorts", details: "2 Colours", },
    { id: 29, name: "Nike Blazer Low '77 Jumbo", image: "/Rectangle (29).png", price: "MRP : ₹ 8 595.00", category: "Women's Shoes", details: "1 Colour", },
    { id: 30, name: "Nike SB Force 58", image: "/Rectangle (26).png", price: "MRP : ₹ 5 995.00", category: "Skate Shoe", details: "1 Colour", },
    { id: 5, name: "Air Jordan 1 Elevate Low", image: "/Rectangle (3).png", price: "MRP : ₹ 11 895.00", category: "Women's Shoes", details: "1 Colour", },
    { id: 6, name: "Nike Standard Issue", image: "/Rectangle (2).png", price: "MRP : ₹ 2 895.00", category: "Women's Basketball Jersey", details: "1 Colour", },
    { id: 7, name: "Nike Dunk Low Retro SE", image: "/Rectangle (7).png", price: "MRP : ₹ 9 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 8, name: "Nike Dri-FIT UV Hyverse", image: "/Rectangle (6).png ", price: "", category: "Men's Short-Sleeve Graphic Fitness Top", details: "1 Colour", },
    { id: 9, name: "Nike Court Vision Low", image: "/Rectangle (5).png", price: "MRP : ₹ 5 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 10, name: "Nike Dri-FIT Ready", image: "/Rectangle (10).png", price: "MRP : ₹ 2 495.00", category: "Men's Short-Sleeve Fitness Top", details: "3 Colours", },
    { id: 11, name: "Nike One Leak Protection: Period", image: "/Rectangle (9).png", price: "MRP : ₹ 3 395.00", category: "Women's Mid-Rise 18cm (approx.) Biker Shorts", details: "2 Colours", },
    { id: 12, name: "Nike Air Force 1 LV8 3", image: "/Rectangle (8).png", price: "MRP : ₹ 7 495.00", category: "Older Kids' Shoe", details: "1 Colour", },
    { id: 13, name: "Nike Blazer Low Platform", image: "/Rectangle (13).png", price: "MRP : ₹ 8 195.00", category: "Women's Shoes", details: "1 Colour", },
    { id: 14, name: "Nike Air Force 1 '07", image: "/Rectangle (12).png", price: "MRP : ₹ 8 195.00", category: "Women's Shoe", details: "2 Colours", },
    { id: 15, name: "Nike Pro Dri-FIT", image: "/Rectangle (11).png", price: "MRP : ₹ 1 495.00", category: "Men's Tight-Fit Sleeveless Top", details: "1 Colour", },
    { id: 16, name: "Nike Dunk Low Retro", image: "/Rectangle (16).png", price: "MRP : ₹ 8 695.00", category: "Men's Shoes", details: "1 Colour", },
    { id: 17, name: "Nike Air Max SC", image: "/Rectangle (15).png", price: "MRP : ₹ 5 995.00", category: "Women's Shoes", details: "2 Colours", },
    { id: 18, name: "Nike Dri-FIT UV Miler", image: "/Rectangle (14).png", price: "MRP : ₹ 1 695.00", category: "Men's Short-Sleeve Running Top", details: "1 Colour", },
    { id: 19, name: "Nike Air Max SYSTM", image: "/Rectangle (19).png", price: "MRP : ₹ 6 495.00", category: "Older Kids' Shoes", details: "1 Colour", },
    { id: 20, name: "Nike Alate All U", image: "/Rectangle (18).png", price: "MRP : ₹ 2 195.00", category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra", details: "1 Colour", },
    { id: 21, name: "Nike Court Legacy Lift", image: "/Rectangle (17).png", price: "MRP : ₹ 7 495.00", category: "Women's Shoes", details: "2 Colours", },
    { id: 22, name: "Nike Swoosh", image: "/Rectangle (22).png", price: "MRP : ₹ 3 095.00", category: "Women's Medium-support Padded Sports Bra Tank", details: "2 Colours", },
    { id: 23, name: "Nike SB Zoom Janoski OG+", image: "/Rectangle (21).png", price: "MRP : ₹ 8 595.00", category: "Shoes", details: "1 Colour", },
    { id: 24, name: "Nike Dri-FIT Run Division Rise 365", image: "/Rectangle (20).png", price: "MRP : ₹ 3 495.00", category: "Men's Running Tank", details: "2 Colours", },
    { id: 25, name: "Nike Dri-FIT Challenger", image: "/Rectangle (25).png", price: "MRP : ₹ 2 495.00", category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", details: "1 Colour", },
    { id: 26, name: "Jordan Series ES", image: "/Rectangle (24).png", price: "MRP : ₹ 7 495.00", category: "Men's Shoes", details: "2 Colours", },
    { id: 27, name: "Nike Outdoor Play", image: "/Rectangle (23).png", price: "MRP : ₹ 3 895.00", category: "Older Kids' Oversized Woven Jacket", details: "1 Colour", },
    { id: 28, name: "Nike Sportswear Trend", image: "/Rectangle (27).png", price: "MRP : ₹ 2 495.00", category: "Older Kids' (Girls') High-waisted Woven Shorts", details: "2 Colours", },
    { id: 29, name: "Nike Blazer Low '77 Jumbo", image: "/Rectangle (29).png", price: "MRP : ₹ 8 595.00", category: "Women's Shoes", details: "1 Colour", },
    { id: 30, name: "Nike SB Force 58", image: "/Rectangle (26).png", price: "MRP : ₹ 5 995.00", category: "Skate Shoe", details: "1 Colour", },

];

export default function ProductList() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <Link key={product.id} href={{ pathname: '/NewandFeature/[id]', query: { id: product.id } }}>
                        <div className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                            <p className="text-gray-600">{product.category}</p>
                            <p className="text-gray-900 font-bold">{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
