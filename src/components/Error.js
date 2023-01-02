import React from 'react'
import { Link } from "react-router-dom";
export const Error = () => {
  return (
<>










<section class="flex items-center justify-center bg-white dark:bg-slate-900">
    <div class="flex flex-col px-10 text-gray-700 lg:flex-row py-40 lg:space-x-16 lg:space-x-reverse">
        <div class="order-1 max-w-md px-2 pt-12 text-sm md:text-base lg:px-0">
            <header class="mb-6">
                <h2 class="text-4xl font-bold leading-none text-gray-400 dark:text-gray-200 select-none lg:text-6xl">404.</h2>
                <h3 class="text-xl font-light leading-normal lg:text-3xl md:text-3xl dark:text-gray-200">Sorry, we couldn't find this page.</h3>
            </header>

            <p class="max-w-sm mb-5 leading-5 md:leading-7 dark:text-gray-300">
                Don't worry, sometimes even we make mistakes.
                You can find plenty of other things on our homepage.
            </p>
            

            <Link to="/"
                class="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700">
                Back to Homepage
            </Link>
        </div>
        
        <div className="mx-auto">
        <img className=" w-full h-full max-w-sm rounded-3xl max-md:w-48 " alt="erroaasdr" src="/error.jpg"/>
        </div>
        
        

    </div>
</section>



























</>

  )
}
 
export default Error;