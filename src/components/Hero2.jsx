import React from "react";
import img1 from "../assets/image 5.png"; // Replace with the actual path to your image
import img2 from "../assets/image 7.png"; // Replace with the actual path to your image
import img3 from "../assets/iPhone 14.png"; // Replace with the actual path to your image
import BG_RIBBON from "../assets/bg-ribbion.png";
import frame1 from "../assets/Frame 1000001782.png";
import frame2 from "../assets/Frame 1000001784.png";
import frame3 from "../assets/Frame 1000001786.png";
import frame4 from "../assets/Frame 1000001787.png";
import frame5 from "../assets/Frame 1000001789.png";
import frame6 from "../assets/Frame 1000001790.png";
import vector from "../assets/Vector.svg";
const Hero2 = () => {
  return (
    <>
      <div
        className="flex flex-col gap-11 overflow-hidden justify-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${BG_RIBBON})`,
        }}
      >
        <h1 className="text-center font-poppins text-4xl pt-7 font-medium text-gray-800 mb-8">
          Key features
        </h1>
        <div className="justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div
            className="bg-white p-6 mb-5 rounded-3xl shadow-md flex flex-col gap-11 overflow-hidden justify-center h-auto bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Everything in one place
            </h1>
            <p className="text-gray-700">
              Add your personal notes to any case you'd prefer
            </p>
            <div className="flex mt-4 gap-4 sm:gap-8">
              <button className="px-4 sm:px-8 py-2 bg-transparent text-white rounded-3xl">
                Try it
              </button>
              <button className="px-4 sm:px-8 py-2 bg-blue-600 text-white rounded-3xl">
                Use now
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <div
              className="bg-white p-6 mb-5 mr-0 sm:mr-9 rounded-3xl shadow-md max-w-sm sm:max-w-md"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Never be Late
              </h1>
              <p className="text-gray-700">
                Our alarm system integrated within the app will notify you of
                any upcoming events.
              </p>
              <div className="flex mt-4 gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent text-white rounded-3xl">
                  Try it
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600 text-white rounded-3xl">
                  Use now
                </button>
              </div>
            </div>
            <div
              className="bg-white p-6 ml-0 mb-5 sm:ml-8 rounded-3xl shadow-md max-w-sm sm:max-w-md"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Stay Organized
              </h1>
              <p className="text-gray-700">
                Ensure that your schedule is accurate by entering new
                appointments or events into our digital calendar.
              </p>
              <div className="flex mt-4 gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent text-white rounded-3xl">
                  Try it
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600 text-white rounded-3xl">
                  Use now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap pt-4">
        <div className="rounded-2xl py-6 pl-6">
          <img src={frame1} alt="" />
        </div>
        <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
          <img src={vector} alt="" className="max-w-full h-auto" />
          <p className="text-gray-700 text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            temporibus voluptate modi maxime id commodi explicabo rem veniam?
            Pariatur quas eius quo modi repellendus perferendis magni voluptas,
            eligendi at similique?
          </p>
          <div className="mt-4 text-end">
            <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
            <h4 className="text-sm font-normal text-gray-500">Lorem Ipsum</h4>
          </div>
        </div>
        <div className="rounded-2xl py-6 pl-6">
          <img src={frame2} alt="" />
        </div>
        <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
          <img src={vector} alt="" className="max-w-full h-auto" />
          <p className="text-gray-700 text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            temporibus voluptate modi maxime id commodi explicabo rem veniam?
            Pariatur quas eius quo modi repellendus perferendis magni voluptas,
            eligendi at similique?
          </p>
          <div className="mt-4 text-end">
            <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
            <h4 className="text-sm font-normal text-gray-500">Lorem Ipsum</h4>
          </div>
        </div>
        <div className="rounded-2xl py-6 pl-6 pr-9 mr-12">
          <img src={frame3} alt="" />
        </div>
        <div className="rounded-2xl py-6 pl-6">
          <img src={frame4} alt="" />
        </div>
        <div className="rounded-2xl py-6">
          <img src={frame5} alt="" />
        </div>
        <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
          <img src={vector} alt="" className="max-w-full h-auto" />
          <p className="text-gray-700 text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            temporibus voluptate modi maxime id commodi explicabo rem veniam?
            Pariatur quas eius quo modi repellendus perferendis magni voluptas,
            eligendi at similique?
          </p>
          <div className="mt-4 text-end">
            <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
            <h4 className="text-sm font-normal text-gray-500">Lorem Ipsum</h4>
          </div>
        </div>
        <div className="rounded-2xl py-6 pl-6">
          <img src={frame6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero2;
