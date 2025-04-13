import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full bg-black">
      {/* Top navbar section */}
      <div className="flex justify-between items-center px-6 py-2 ">
        {/* Left logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/ExM-achina-red 1.png"
            alt="Logo"
            width={240}
            height={80}
            className="object-contain mt-3"
          />
        </div>

        {/* Center navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li className="px-4 py-1 bg-white text-black rounded text-[22px]">
              <Link href="/" className="font-medium">
                Companies
              </Link>
            </li>
            <li className="px-4 py-1 text-[#D2D2D2] text-[22px] rounded">
              <Link href="/" className="font-medium">
                Deals
              </Link>
            </li>
            <li className="px-4 py-1 text-[#D2D2D2] text-[22px] rounded">
              <Link href="/" className="font-medium">
                Limited Partners
              </Link>
            </li>
            <li className="px-4 py-1 text-[#D2D2D2] text-[22px] rounded">
              <Link href="/" className="font-medium">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Right logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/ExM-Dealgorithm 2 (1).png"
            alt="Logo"
            width={240}
            height={80}
            className="object-contain mt-3"
          />
        </div>
      </div>

      {/* Border line */}
      <div className="border-t border-[#D2D2D2]"></div>

      {/* Bottom section - revised layout */}
      <div className="flex items-center px-6 py-3">
        {/* Company Screening on left */}
        <div className="w-1/4 text-left pl-4">
          <h4 className="text-[#D2D2D2] text-[22px]">Company Screening</h4>
        </div>

        {/* Chat ExM and Sequoia in center */}
        <div className="w-2/4 flex justify-center items-center space-x-5  ">
          <p className="text-[#000000] text-[22px] text-center bg-white w-3/4 rounded-[7px]">
            Chat ExM
          </p>
          <div className="flex items-center space-x-2 ml-6">
            <p className="text-white text-[22px] text-center ">Sequoia</p>
            <div className="rounded-full bg-teal-500 flex items-center justify-center h-6 w-6 text-xs text-white">
              <Image
                src="/images/right-side-img.png"
                alt="right-side-img"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Empty space on right for balance */}
        <div className="w-1/4"></div>
      </div>

      {/* Border line */}
      <div className="border-t border-[#D2D2D2]"></div>

      <div className="relative w-full bg-black text-white overflow-hidden">
        {/* Background image on the right - positioned absolutely */}
        <div className="absolute right-0 top-0 h-full w-1/3 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-sec-mask- group.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center right"
              className="opacity-70"
            />
          </div>
        </div>

        {/* Content container - limited width to avoid overlapping with background */}
        <div className="relative z-10 px-6 py-4 mb-4 ml-14 max-w-[60%] md:max-w-[65%] lg:max-w-[70%]">
          {/* Criteria heading */}
          <p className="text-[16px] text-[#D2D2D2] font-bold mb-8 mt-8 pl-4">
            CRITERIA
          </p>

          {/* Criteria Item 1 */}

          <div className="bg-black text-white flex items-center justify-between p-2 w-full">
            <div className="flex items-center space-x-5">
              {/* Number 1 */}
              <p className="text-[12px] font-medium text-[#919191] ">1</p>

              {/* Bordered Image */}
              <div className="text-[#D2D2D2]">
                <Image
                  src="/images/border.png"
                  alt="border"
                  width={15}
                  height={3}
                  className="object-contain"
                />
              </div>

              {/* Down Arrow */}
              <div className="pl-5">
                <Image
                  src="/images/mdi_arrow-up-thin (1).png"
                  alt="down-arrow"
                  width={10}
                  height={3}
                  className="w-5 h-5"

                />
              </div>

              {/* Text */}
              <p className="text-[14px] text-[#D2D2D2] pl-24">
                Industry Classification In (Primary) Real Estate;Health Care
              </p>
            </div>

            {/* Digits with Cross Icon */}
            <div className="flex items-center space-x-2">
              <Image
              src="/images/mini-arrow.PNG"
              alt="left-arrow"
              width={25}
              height={10}
              objectFit="contain"
            
              />
              <p className="text-[15px] text-[#D2D2D2] ">250,000</p>
              <span className="text-sm text-[#D2D2D2] ">✕</span>
            </div>
          </div>

          {/* Border line that stops at the background image */}
          <div className="border-b border-gray-700 "></div>

          {/* Criteria Item 2 */}
          <div className="bg-black text-white flex items-center justify-between p-2 w-full">
            <div className="flex items-center space-x-5">
              {/* Number 2 */}
              <p className="text-[12px] text-[#919191] font-medium">2</p>

              {/* Bordered Image */}
              <div className="">
                <Image
                  src="/images/border.png"
                  alt="border"
                  width={15}
                  height={3}
                  className="object-contain"
                />
              </div>

              {/* Up and Down Arrows */}
              <div className="pl-5">
                 <Image
                  src="/images/updown-arrow.PNG"
                  alt="up-arrow"
                  width={10}
                  height={3}
                  className="w-5 h-5"
                />
                {/* <Image
                  src="/images/mdi_arrow-up-thin (1).png"
                  alt="down-arrow"
                  width={10}
                  height={3}
                  className="w-5 h-5"
                />  */}
              </div>

              {/* "And" Text */}
              <p className="text-[14px] text-[#D2D2D2] ml-3 pl-5">And
                
              </p>

              {/* Main Text */}
              <p className="text-[14px] text-[#D2D2D2] ml-1 pl-5">
           
                Geography In United States and Canada
              </p>
            
            </div>

            {/* Digits with Cross Icon */}
            <div className="flex items-center space-x-2">
              <p className="text-[15px] text-[#D2D2D2] ">214,712</p>
              <span className="text-sm">✕</span>
            </div>
          </div>

          {/* Border line */}
          <div className="border-b border-gray-700 "></div>

          {/* Criteria Item 3 */}

          <div className="bg-black text-white flex items-center justify-between p-2 w-full">
            <div className="flex items-center space-x-4">
              {/* Number 3 */}
              <p className="text-[12px] text-[#919191] font-medium">3</p>

              {/* Space for Bordered Image (Invisible but preserves spacing) */}
              <div className="border border-gray-500 invisible">
                <div className="w-5 h-[5px]"></div>
              </div>

              {/* Up Arrow */}
              <div className="pl-5">
                <Image
                  src="/images/mdi_arrow-up-thin (2).png"
                  alt="up-arrow"
                  width={10}
                  height={3}
                  className="w-5 h-5"
                />
              </div>

              {/* Icon and Text */}
              <div className="flex items-center space-x-1">
                {/* Placeholder for the icon (since it's not provided, using a small square as a placeholder) */}
                <div className="w-4 h-4"></div>
                <p className="text-[14px] text-[#D2D2D2] pl-1 ">And</p>
                <p className="text-[14px] text-[#D2D2D2] pl-7">
                  Company Type In Public Company
                </p>
              </div>
            </div>

            {/* Digits with Cross Icon */}
            <div className="flex items-center space-x-2">
              <p className="text-[15px] text-[#D2D2D2] ">3,609</p>
              <span className="text-sm text-[#D2D2D2]">✕</span>
            </div>
          </div>

          {/* Border line */}
          <div className="border-b border-gray-700 "></div>

          {/* Add Criteria section */}
          <div className="w-full bg-black text-white px-6 py-1">
            <div className="flex flex-col">
              <div className="flex items-center space-x-20">
                {/* Add Criteria text */}
                <p className="text-gray-400 text-sm whitespace-nowrap ml-5">
                  Add Criteria
                </p>

                {/* Input field with bottom border only */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Add Search Criteria or Add Keywords"
                    className="w-full bg-transparent border-b border-gray-700 text-gray-400 text-sm py-2 focus:outline-none ml-7"
                  />

                  {/* Search icon positioned absolute to the right */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/images/material-symbols_search-rounded.png"
                      width={20}
                      height={20}
                      alt="search"
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                {/* Add button */}
                <button className="bg-[#3D3D3D] text-[10px] text-white px-4 py-2 rounded-[7px] uppercase ">
                  ADD
                </button>
              </div>

              {/* Run Screen button positioned to the right */}
              <div className="flex justify-end mt-4 mb-2">
                <button className="bg-[#3D3D3D] text-[10px] text-white px-6 py-2 rounded-[7px] uppercase tracking-wide">
                  RUN SCREEN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Final border line */}
      <div className="border-b border-[#D2D2D2]   "></div>

      <div className="bg-black p-4">
        {/* Header */}
        <h2 className="text-[#D2D2D2] text-[24px] font-semibold mb-4">
          Explore Company Criteria Below
        </h2>

        {/* Cards Container */}
        <div className="flex space-x-14 justify-center overflow-x-auto">
          {/* Card 1: Sectors and Industries */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Sectors and Industries
            </p>
            <Image
              src="/images/options_1053833 1 (1).png"
              alt="Sectors and Industries"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 2: Business Description */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Business Description
            </p>
            <Image
              src="/images/project-management.png"
              alt="Business Description"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 3: Locations */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Locations
            </p>
            <Image
              src="/images/vaadin_globe.png"
              alt="Locations"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 4: Business Cycles and Backing Status */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Business Cycles and <br></br> Backing Status
            </p>
            <Image
              src="/images/pie-chart.png"
              alt="Business Cycles and Backing Status"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 5: Deals and Investors */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Deals and Investors
            </p>
            <Image
              src="/images/partnership.png"
              alt="Deals and Investors"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 6: Financial Metrics */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Financial Metrics
            </p>
            <Image
              src="/images/indicators.png"
              alt="Financial Metrics"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>

          {/* Card 7: Intellectual Property */}
          <div className="bg-white rounded-[30px] w-32 h-44 flex flex-col items-center justify-center p-4">
            <p className="text-black text-sm font-medium text-center mb-4">
              Intellectual Property
            </p>
            <Image
              src="/images/keyhole.png"
              alt="Intellectual Property"
              width={50}
              height={10}
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
