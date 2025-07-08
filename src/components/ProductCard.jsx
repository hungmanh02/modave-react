const ProductCard=()=>{
    return (
        <div className="group relative rounded-xl">
            <div className="relative">
            <img src="images/products/womens/women-176.jpg" alt=""  className="rounded-xl overflow-hidden"/>
            <button className="absolute left-2 bottom-3 right-2 py-2 px-auto w-[w-full - 16px] inline-block text-center  bg-transparent border-2 border-black">Add to cart</button>
            </div>
            <div>
                <div className="mt-4 flex sm:justify-between sm:px-1 md:flex-col">
                    <div>
                        <h3 className="text-sm text-gray-900 font-medium">
                            <a href="#" className="text-black">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            V-neck cotton T-shirt
                            </a>
                        </h3>
                    </div>
                    <div className="flex items-center mt-1 gap-2">
                        <p className="text-sm text-gray-800 line-through">$98.00</p>
                        <p className="text-sm font-medium text-gray-900">$59.88</p>
                    </div>
                </div>
                <div className=" mt-1 sm:px-1">
                    <ul class="flex flex-wrap gap-2">
                        <li class="h-5 w-5">
                            <span class="hidden text-capitalize color-filter">Orange</span>
                            <span class="w-full h-full inline-block rounded-full  bg-orange-500"></span>
                        </li>
                        <li class="h-5 w-5">
                            <span class="hidden text-capitalize color-filter">Pink</span>
                            <span class="w-full h-full border-3 inline-block rounded-full  bg-pink-300"></span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
       
    );
}
export default ProductCard