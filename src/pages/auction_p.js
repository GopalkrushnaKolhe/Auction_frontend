import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css' // not working, dont know why! Used below line as solution
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import Navbar from './Components/Navbar';

export default function auction() {

  return (
      <section className="text-gray-600 body-font overflow-hidden">
        <Navbar/>
  <div classNameName="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-60 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">AUCTION NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Samsung M31</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus vel facere nostrum dignissimos consectetur totam? Repudiandae, non iusto. Consectetur consequatur reiciendis voluptatibus maiores aut ratione provident tenetur, quidem assumenda dicta. Veritatis, minima quis dolorum reiciendis doloremque dolore tempore excepturi odit dignissimos consequatur eius labore libero ducimus distinctio? Eaque, quaerat.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        </div>
        
        <div class="flex flex-col space-y-3">
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold">Current Price:</h3>
    <h3 class="text-lg font-bold">₹1500</h3>
  </div>
  <div class="flex items-center justify-between">
    <p class="text-sm font-medium text-gray-500">Minimum Bid:</p>
    <p class="text-sm font-medium text-gray-500">₹1000</p>
  </div>
  <div class="flex items-center justify-between">
    <p class="text-sm font-medium text-gray-500">Set Your Maximum Bid:</p>
    <div class="flex flex-col items-end">
      <label for="currentBid" class="sr-only">Set Your Maximum Bid:</label>
      <input id="currentBid" name="currentBid" placeholder="$0.00" type="text" class="w-full px-4 py-2 text-sm leading-tight text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
      <span name="currentBid" class="hidden"></span>
    </div>
  </div>
  <button class="w-full px-4 py-2 text-lg font-bold text-white bg-purple-600 rounded-md shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 d-print-none">Place My Bid</button>
  <hr class="my-4 border-gray-100" />
</div>

        
        {/* <div className="flex">
       
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Register Bid</button>
          
        </div> */}
      </div>
    </div>
  </div>
</section>
    
  );
}
