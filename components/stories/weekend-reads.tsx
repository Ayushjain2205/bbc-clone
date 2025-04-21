import React from "react";
import Image from "next/image";
import Link from "next/link";

const WeekendReads = () => (
  <div className="mt-8 border-t-2 border-black py-6">
    <h2 className="text-base uppercase font-roboto font-bold mb-6">WEEKEND READS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Link href="#" className="group">
          <Image
            src="https://ichef.bbci.co.uk/images/ic/1920x1080/p0l3l1vq.jpg.webp"
            width={600}
            height={400}
            alt="Police officers with suspects from the Great Train Robbery"
            className="w-full h-auto"
          />
          <h3 className="text-xl font-merriweather font-bold mt-3 group-hover:underline">
            The men behind the Great Train Robbery
          </h3>
          <p className="text-base font-merriweather mt-2">
            Twelve suspects were put on trial in April 1964. More than a decade later, several of them talked to
            the BBC about the notorious heist.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>6 days ago</span>
            <span className="mx-2">|</span>
            <span>Culture</span>
          </div>
        </Link>
      </div>
      <div>
        <Link href="#" className="group">
          <Image
            src="https://ichef.bbci.co.uk/images/ic/1024xn/p0l56fjv.jpg.webp"
            width={600}
            height={400}
            alt="Stately home with lake from Pride and Prejudice"
            className="w-full h-auto"
          />
          <h3 className="text-xl font-merriweather font-bold mt-3 group-hover:underline">
            The stunning landscapes behind Pride and Prejudice
          </h3>
          <p className="text-base font-merriweather mt-2">
            As the UK celebrates Jane Austen's 250th birthday, there's never been a better time to explore the
            picture-perfect villages connected to her most famous novel.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>7 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Travel</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default WeekendReads;
