import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDot } from "lucide-react";
import { newsData } from "@/data/news";

const SportNews = () => (
  <div>
    <div className="flex items-center border-b-2 border-black pb-2 mb-4">
      <h2 className="text-base uppercase font-roboto font-bold">SPORT</h2>
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>
    <div className="mb-6">
      <Link href="#" className="group block">
        <Image
          src={newsData.sports.featured.image.src}
          width={300}
          height={200}
          alt={newsData.sports.featured.image.alt}
          className="w-full h-auto mb-2"
        />
        <h3 className="text-lg font-merriweather font-bold group-hover:underline">
          {newsData.sports.featured.title}
        </h3>
      </Link>
    </div>
    {newsData.sports.articles.map((story, index) => (
      <div key={story.id} className="mb-4 pb-4 border-b border-gray-200">
        <Link href="#" className="group block">
          {story.isLive ? (
            <div className="flex items-center">
              <CircleDot className="w-4 h-4 text-red-600 mr-2" />
              <h3 className="text-base font-merriweather font-bold group-hover:underline">
                {story.timeAgo.toUpperCase()} {story.title}
              </h3>
            </div>
          ) : (
            <>
              <h3 className="text-base font-merriweather font-bold group-hover:underline">
                {story.title}
              </h3>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <span>{story.timeAgo}</span>
                <span className="mx-2">|</span>
                <span>{story.category}</span>
              </div>
            </>
          )}
        </Link>
      </div>
    ))}
    {newsData.topStories.map((story) => (
      <div key={story.id} className="mb-4">
        <Link href="#" className="group block">
          <h3 className="text-base font-merriweather font-bold group-hover:underline">
            {story.title}
          </h3>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <span>{story.timeAgo}</span>
            <span className="mx-2">|</span>
            <span>{story.category}</span>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default SportNews;
