// // "use client";
// // import React, { useState } from "react";

// // export default function Scroll() {

// //   return (
// //     <section className="sm:flex flex-row ">
// //       <div className="grid grid-cols-1">
// //         <div className="container mx-auto">
// //           <div className="flex flex-wrap ">
// //             <div className="container mx-auto">
// //               <div className="row p-10">
// //                 <div className="col-lg-12">
// //                   <div className="section-heading">
// //                     <h2 className="text-5xl font-bold py-5">MEN'S Lastest</h2>
// //                     <span className="text-sm">
// //                       Details to details is what makes Hexashop different from
// //                       the other themes.
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex overflow-x-auto space-x-12 body-font">
// //                 <section className="flex-shrink-0 ">
// //                   <div className="overflow-y absolute z-50 item-center w-1/2">
// //                     {/* <ul className="relative item-center w-full">
// //                       <li>
// //                         <svg
// //                           className="h-6 w-6 text-gray-500 border-ridge"
// //                           width="30"
// //                           height="24"
// //                           viewBox="0 0 24 24"
// //                           stroke-width="2"
// //                           stroke="currentColor"
// //                           fill="none"
// //                           stroke-linecap="round"
// //                           stroke-linejoin="round"
// //                         >
                          
// //                           <path stroke="none" d="M0 0h24v24H0z" />
// //                           <circle cx="12" cy="12" r="2" />
// //                           <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
// //                           <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
// //                         </svg>
// //                       </li>
// //                       <li>
                       
// //                         <svg
// //                           className="w-4 h-4 ms-1 text-black-300"
// //                           aria-hidden="true"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           fill="currentColor"
// //                           viewBox="0 0 22 20"
// //                         >
// //                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                         </svg>
// //                       </li>
// //                       <li>
// //                         <svg
// //                           className="h-6 w-6 text-gray-500"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                         >
// //                           <path
// //                             stroke-linecap="round"
// //                             stroke-linejoin="round"
// //                             stroke-width="2"
// //                             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
// //                           />
// //                         </svg>
// //                       </li>
// //                     </ul> */}
// //                   </div>

// //                   <span>
// //                     <img
// //                       src="./images/men-03.jpg"
// //                       className="bg-purple-200 h-300 w-300 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Classic Spring
// //                     </h2>
// //                     <p className="mt-1">$120.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-01.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>

// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Air force 1 X
// //                     </h2>
// //                     <p className="mt-1">$90.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-02.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Love Nana ‘20
// //                     </h2>
// //                     <p className="mt-1">$150.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-03.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Classic Spring
// //                     </h2>
// //                     <p className="mt-1">$120.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-01.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Air force 1 X
// //                     </h2>
// //                     <p className="mt-1">$90.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-02.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Love Nana ‘20
// //                     </h2>
// //                     <p className="mt-1">$150.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-03.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Classic Spring
// //                     </h2>
// //                     <p className="mt-1">$120.00</p>
// //                   </div>
// //                 </section>
// //                 <section className="flex-shrink-0 ">
// //                   <span>
// //                     <img
// //                       src="./images/men-01.jpg"
// //                       className="bg-purple-200 h-500 w-500 "
// //                       alt=""
// //                     />
// //                   </span>
// //                   <div className="mt-4">
// //                     <div className="inline-flex relative  mb-5">
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                       <svg
// //                         className="w-4 h-4 ms-1 text-black-300 dark:text-gray-500"
// //                         aria-hidden="true"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="currentColor"
// //                         viewBox="0 0 22 20"
// //                       >
// //                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //                       </svg>
// //                     </div>
// //                     <h2 className="text-gray-900 title-font text-lg font-medium">
// //                       Air Force 1 X
// //                     </h2>
// //                     <p className="mt-1">$90.00</p>
// //                   </div>
// //                 </section>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import React, { useState } from "react";

// export default function Scroll() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [endIndex, setEndIndex] = useState(3);
//   const scrollData = [
//     {id:0,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     },
//     {id:1,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     },
//     {id:3,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     },
//     {id:4,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     },
//     {id:5,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     },
//     {id:6,
//       image:<img
//       className="rounded-sm p-3"
//       src="./images/men-01.jpg"
//       width={320}
//       height={320}
//       alt=""
//     />,
//     name:"classic",
//     price:"$345.00",

//     }

//     // <img
//     //   className="rounded-sm p-3"
//     //   src="./images/men-02.jpg"
//     //   width={320}
//     //   height={320}
//     //   alt=""
//     // />,
//     // <img
//     //   className="rounded-sm p-3"
//     //   src="./images/men-03.jpg"
//     //   width={320}
//     //   height={320}
//     //   alt=""
//     // />,
//     // <img
//     //   className="rounded-sm p-3"
//     //   src="./images/men-02.jpg"
//     //   width={320}
//     //   height={320}
//     //   alt=""
//     // />,
//     // <img
//     //   className="rounded-sm p-3"
//     //   src="./images/men-03.jpg"
//     //   width={320}
//     //   height={320}
//     //   alt=""
//     // />,
//     // <img
//     //   className="rounded-sm p-3"
//     //   src="./images/men-01.jpg"
//     //   width={320}
//     //   height={320}
//     //   alt="men"
//     // />,
//   ];

//   const handleClick = (type: "left" | "right") => {
//     if (type === "left") {
//       if (length - 1 < 0) {
//         console.log("left");
//         setStartIndex(scrollData.length - 3);
//         setEndIndex(scrollData.length);
//       } else {
//         console.log("left1");
//         setStartIndex(length - 3);
//         setEndIndex(length - 3);
//       }
//     } else {
//       if (endIndex + 3 > scrollData.length) {
//         console.log("right");
//         setStartIndex(0);
//         setEndIndex(3);
//       } else {
//         console.log("right1");
//         setStartIndex(startIndex + 3);
//         setEndIndex(endIndex + 3);
//       }
//     }
//   };
//   return(
//     <>
//   <div className="container mx-auto">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-heading">
//                 <h2 className="text-5xl font-bold">MEN'S Lastest</h2>
//                 <span className="text-sm">
//                   Details to details is what makes Hexashop different from the
//                   other themes.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="scroll-items flex flex-row-1 sm:p-10">
//           <div className="border-solid border border-indigo-100 justify-content: sm:flex-start w-50 h-10 my-32">
//             <button id="1" onClick={() => handleClick("left")}>
//               <img
//                 className="rounded-md mt-100 p-2"
//                 src="./images/prev.png"
//                 width={50}
//                 height={50}
//                 alt="left"
//               />
//             </button>
//           </div>
//           <div className="overflow-x-auto w-500 h-500 scroll-pr-0.5 flex flex-row"></div>
//             {/* {scrollData.slice(startIndex, endIndex)} */}
//             <>
//             {scrollData.map((item, index) => (
//               <div key={index}>  
//               <div className="img">{item.image}</div> 
//               <div className="price">{item.price}</div> </div>
//             ))}
//             </>
          
//           <div className="border-solid border border-indigo-100 flex-end w-50 h-10 my-32">
//             <button id="2" onClick={() => handleClick("right")}>
//               <img
//                 className="rounded-md mt-100 p-2"
//                 src="./images/next.png"
//                 width={50}
//                 height={50}
//                 alt="left"
//               />
//             </button>
//           </div>
//           </div>
//         </>
//   )}

