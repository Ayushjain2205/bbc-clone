import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const USCanadaNews = () => (
  <div>
    <div className="flex items-center border-b-2 border-black pb-2 mb-4">
      <h2 className="text-base uppercase font-roboto font-bold">US & CANADA NEWS</h2>
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>

    <div className="mb-6">
      <Link href="#" className="group block">
        <Image
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/32c2/live/70aee0e0-1cb6-11f0-8a1e-3ff815141b98.jpg.webp"
          width={300}
          height={200}
          alt="Anti-Trump protests"
          className="w-full h-auto mb-2"
        />
        <h3 className="text-lg font-merriweather font-bold group-hover:underline">
          Thousands join anti-Trump protests across US
        </h3>
        <p className="text-sm font-merriweather mt-1">
          Demonstrations, taking place on the 250th anniversary of the start of the American Revolutionary
          War, addressed a range of grievances.
        </p>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <span>21 hrs ago</span>
          <span className="mx-2">|</span>
          <span>US & Canada</span>
        </div>
      </Link>
    </div>

    <div className="mb-4 pb-4 border-b border-gray-200">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          US Supreme Court halts deportation of detained Venezuelans
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>24 hrs ago</span>
          <span className="mx-2">|</span>
          <span>US & Canada</span>
        </div>
      </Link>
    </div>

    <div className="mb-4 pb-4 border-b border-gray-200">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          Why everyone is suddenly so interested in US bond markets
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>2 days ago</span>
          <span className="mx-2">|</span>
          <span>US & Canada</span>
        </div>
      </Link>
    </div>

    <div className="mb-4">
      <Link href="#" className="group block">
        <h3 className="text-base font-merriweather font-bold group-hover:underline">
          Anxiety at US colleges as foreign students are detained and visas revoked
        </h3>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>2 days ago</span>
          <span className="mx-2">|</span>
          <span>US & Canada</span>
        </div>
      </Link>
    </div>
  </div>
);

export default USCanadaNews;
