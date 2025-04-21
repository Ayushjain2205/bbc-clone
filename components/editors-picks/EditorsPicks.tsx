import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { editorsPicksData } from '@/data/editorsPicks';

export const EditorsPicks = () => {
  return (
    <div className="mt-12 border-t-2 border-black bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
          <h2 className="text-base uppercase font-roboto font-bold">EDITOR'S PICKS</h2>
          <div className="flex">
            <button className="w-10 h-10 bg-transparent flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="w-10 h-10 bg-transparent flex items-center justify-center ml-1">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-4">
          {editorsPicksData.map((pick) => (
            <div key={pick.id} className="min-w-[250px] w-[250px] flex-shrink-0">
              <Link href={pick.link} className="group block">
                <div className="relative">
                  <Image
                    src={pick.image}
                    width={250}
                    height={150}
                    alt={pick.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                  {pick.title}
                </h3>
                <p className="text-sm mt-2 text-gray-300">
                  {pick.description}
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-400">
                  <span>{pick.date}</span>
                  <span className="mx-2">|</span>
                  <span>{pick.category}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
