import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    {/* Left Column */}
    <div className="md:col-span-4">
      <div className="mb-6">
        <Link href="#" className="group">
          <Image
            src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3faa/live/50f03c10-1ddb-11f0-b265-abe347419ae3.jpg.webp"
            width={500}
            height={300}
            alt="Ukraine Russia meeting"
            className="w-full h-auto"
          />
          <h2 className="text-xl font-merriweather font-bold mt-2 group-hover:underline">
            Rosenberg: Is Putin&apos;s &apos;Easter truce&apos; cause for scepticism or chance for peace?
          </h2>
          <p className="text-base font-merriweather mt-2">
            Ukraine and Russia have accused each other of violating a 36-hour truce, but it comes as diplomatic
            efforts pick up, Russia Editor Steve Rosenberg writes.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>10 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Europe</span>
          </div>
        </Link>
      </div>
      <div className="mb-6">
        <Link href="#" className="group">
          <Image
            src="/ukraine-destruction.jpg"
            width={500}
            height={300}
            alt="Ukraine destruction"
            className="w-full h-auto"
          />
          <h2 className="text-xl font-merriweather font-bold mt-2 group-hover:underline">
            Ukraine and Russia trade blame for breaking &apos;Easter truce&apos;
          </h2>
          <p className="text-base font-merriweather mt-2">
            Kyiv says Russian shelling has increased, as Moscow accuses Ukraine of launching hundreds of drone
            attacks.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>47 mins ago</span>
            <span className="mx-2">|</span>
            <span>Europe</span>
          </div>
        </Link>
      </div>
    </div>
    {/* Middle Column */}
    <div className="md:col-span-5">
      <div className="mb-6">
        <Link href="#" className="group">
          <Image
            src="/gaza-ambulance.jpg"
            width={600}
            height={400}
            alt="Gaza ambulance with red circles highlighting details"
            className="w-full h-auto"
          />
          <h2 className="text-2xl font-merriweather font-bold mt-2 group-hover:underline">
            &apos;Professional failures&apos; led to killing of Gaza medics, IDF inquiry says
          </h2>
          <p className="text-base font-merriweather mt-2">
            Fourteen emergency workers and a UN worker were killed when the Israeli military opened fire on a
            convoy of vehicles in Gaza last month.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>17 mins ago</span>
            <span className="mx-2">|</span>
            <span>Middle East</span>
          </div>
        </Link>
      </div>
    </div>
    {/* Right Column */}
    <div className="md:col-span-3">
      <div className="mb-6">
        <Link href="#" className="group">
          <h2 className="text-xl font-merriweather font-bold group-hover:underline">
            DHL suspends high value US deliveries over tariffs
          </h2>
          <p className="text-base font-merriweather mt-2">
            The postal giant will stop shipping packages to American consumers after a rise in red tape at
            customs.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>12 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Business</span>
          </div>
        </Link>
      </div>
      <div className="mb-6">
        <Link href="#" className="group">
          <div className="flex items-center">
            <div className="mr-2">▶</div>
            <h2 className="text-xl font-merriweather font-bold group-hover:underline">
              Celebrations usher in the dawn of Easter Sunday
            </h2>
          </div>
          <p className="text-base font-merriweather mt-2">
            The most important date in the Christian calendar is being marked around the world.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>13 hrs ago</span>
            <span className="mx-2">|</span>
            <span>Europe</span>
          </div>
        </Link>
      </div>
      <div className="mb-6">
        <Link href="#" className="group">
          <h2 className="text-xl font-merriweather font-bold group-hover:underline">
            Inside the rural Texas town where Elon Musk is basing his business empire
          </h2>
          <p className="text-base font-merriweather mt-2">
            The tycoon and Donald Trump adviser has moved his businesses from California to a mostly rural central
            Texas county.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>21 hrs ago</span>
            <span className="mx-2">|</span>
            <span>US & Canada</span>
          </div>
        </Link>
      </div>
      <div className="mb-6">
        <Link href="#" className="group">
          <h2 className="text-xl font-merriweather font-bold group-hover:underline">
            &apos;Why I hesitate to tell people I&apos;m a Gypsy&apos;
          </h2>
          <p className="text-base font-merriweather mt-2">
            Romany women share their experiences of hiding their heritage for fear of prejudice.
          </p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>21 hrs ago</span>
            <span className="mx-2">|</span>
            <span>UK</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default NewsGrid;
