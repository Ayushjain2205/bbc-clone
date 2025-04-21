import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WorldNews = () => (
  <div>
    <div className="flex items-center border-b-2 border-black pb-2 mb-4">
      <h2 className="text-base uppercase font-roboto font-bold">MORE WORLD NEWS</h2>
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>
    <div className="mb-6">
      <Link href="#" className="group block">
        <Image
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/5b59/live/bc22b440-1e85-11f0-91c2-a77218b5dd61.jpg.webp"
          width={300}
          height={200}
          alt="South African politician"
          className="w-full h-auto mb-2"
        />
        <h3 className="text-lg font-merriweather font-bold group-hover:underline">
          South African politician condemned for visiting fugitive pastor
        </h3>
        <p className="text-sm font-merriweather mt-1">
          Top MK official Floyd Shivambu attended an Easter service at Shepherd Bushiri's church in Malawi.
        </p>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <span>4 hrs ago</span>
          <span className="mx-2">|</span>
          <span>Africa</span>
        </div>
      </Link>
    </div>
    <div className="mb-4 pb-4 border-b border-gray-200">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          Pope wishes worshippers Happy Easter after serious illness
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>9 hrs ago</span>
          <span className="mx-2">|</span>
          <span>Europe</span>
        </div>
      </Link>
    </div>
    <div className="mb-4 pb-4 border-b border-gray-200">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          DR Congo bans ex-president's party over alleged rebel links
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>10 hrs ago</span>
          <span className="mx-2">|</span>
          <span>Africa</span>
        </div>
      </Link>
    </div>
    <div className="mb-4">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          Attacks continue despite Putin's 'Easter truce' pledge, Zelensky says
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>11 hrs ago</span>
          <span className="mx-2">|</span>
          <span>Europe</span>
        </div>
      </Link>
    </div>
  </div>
);

export default WorldNews;
