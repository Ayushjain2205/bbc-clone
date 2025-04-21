import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsData } from "@/data/news";

const BusinessNews = () => (
  <div>
    <div className="flex items-center border-b-2 border-black pb-2 mb-4">
      <h2 className="text-base uppercase font-roboto font-bold">BUSINESS</h2>
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>
    {newsData.business.map((story, index) => (
      <div key={story.id} className={`mb-${index === 0 ? '6' : '4'} ${index > 0 ? 'pb-4 border-b border-gray-200' : ''}`}>
        <Link href="#" className="group block">
          {story.image && (
            <Image
              src={story.image.src}
              width={300}
              height={200}
              alt={story.image.alt}
              className="w-full h-auto mb-2"
            />
          )}
          <h3 className={`${index === 0 ? 'text-lg' : 'text-base'} font-merriweather font-bold group-hover:underline`}>
            {story.title}
          </h3>
          {story.description && (
            <p className="text-sm font-merriweather mt-1">
              {story.description}
            </p>
          )}
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <span>{story.timeAgo}</span>
            <span className="mx-2">|</span>
            <span>{story.category}</span>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default BusinessNews;
