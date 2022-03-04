import React from "react";

export default function DetailNews() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-5 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className=" flex justify-start text-left mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            15:15 - March 3, 2022
          </p>
          <img
            className="lg:w-1/2 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt=""
            src="https://picsum.photos/720/600"
          />
          <div className="text-justify lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <p className="mb-8 leading-relaxed">
              Interdum velit euismod in pellentesque massa placerat. Feugiat
              pretium nibh ipsum consequat nisl vel. Lorem donec massa sapien
              faucibus et molestie ac feugiat sed. Massa sed elementum tempus
              egestas. Quis varius quam quisque id diam vel quam elementum.
              Blandit volutpat maecenas volutpat blandit aliquam etiam. Diam
              vulputate ut pharetra sit amet aliquam id diam. Egestas dui id
              ornare arcu odio ut. A diam maecenas sed enim ut sem. Phasellus
              vestibulum lorem sed risus ultricies tristique nulla aliquet. Nibh
              ipsum consequat nisl vel pretium. Sapien nec sagittis aliquam
              malesuada bibendum arcu vitae elementum curabitur. Tellus molestie
              nunc non blandit massa enim nec. Dui ut ornare lectus sit amet.
              Arcu felis bibendum ut tristique et. Mollis aliquam ut porttitor
              leo a diam sollicitudin tempor.
            </p>
            <p className="mb-8 leading-relaxed">
              Interdum velit euismod in pellentesque massa placerat. Feugiat
              pretium nibh ipsum consequat nisl vel. Lorem donec massa sapien
              faucibus et molestie ac feugiat sed. Massa sed elementum tempus
              egestas. Quis varius quam quisque id diam vel quam elementum.
              Blandit volutpat maecenas volutpat blandit aliquam etiam. Diam
              vulputate ut pharetra sit amet aliquam id diam. Egestas dui id
              ornare arcu odio ut. A diam maecenas sed enim ut sem. Phasellus
              vestibulum lorem sed risus ultricies tristique nulla aliquet. Nibh
              ipsum consequat nisl vel pretium. Sapien nec sagittis aliquam
              malesuada bibendum arcu vitae elementum curabitur. Tellus molestie
              nunc non blandit massa enim nec. Dui ut ornare lectus sit amet.
              Arcu felis bibendum ut tristique et. Mollis aliquam ut porttitor
              leo a diam sollicitudin tempor.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 w-2/3 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 py-5 px-4 ">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://picsum.photos/1201/501"
                />
              </div>
              <h2 className="title-font text-left text-2xl font-medium text-gray-900 mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p className="leading-relaxed text-left text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Read more
              </button>
            </div>
            <div className="sm:w-1/2 py-5 px-4">
              <div className="rounded-lg h-64 overflow-hidden ">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://picsum.photos/1202/502"
                />
              </div>
              <h2 className="title-font text-left text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-left text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
