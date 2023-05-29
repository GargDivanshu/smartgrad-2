import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [myVar, setMyVar] = useState(1);
  const values = [1, 2, 3, 4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyVar((prevValue) => {
        const currentIndex = values.indexOf(prevValue);
        const nextIndex = (currentIndex + 1) % values.length;
        return values[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="bg-[#F8F2FC] min-h-screen max-h-fit">
      <h1
        className="text-[4.0625rem] font-[600] text-center Grotesque pt-[115px] text-[#391952] leading-[0.9230769230769231]"
      >
        The world loves Swag
      </h1>
      <div className="px-[60px] mt-[62px]">
        <div className="mx-auto flex flex-row">
          <div className="m-auto">
            <div className="w-[354px] h-[330px] bg-white rounded-3xl m-[9px] flex flex-col p-[24px]">
              <button
              onClick={
                () => setMyVar(1)
              }
                className={`flex mb-[12px] justify-start text-xl font-bold py-13px] px-[17px] items-center  mx-auto rounded-2xl w-[300px] h-[51px]  ${
                  myVar === 1
                    ? "bg-[#BA80E6] text-white ease-in-out transition-all duration-500"
                    : "bg-white text-[#BA80E6] border-[1px] hover:bg-[#E9D5F7] border-[#E9D5F7]"
                }`}
              >
                {myVar === 1 && <Loader />}
                <span
                  className={`${
                    myVar === 1
                      ? "translate-x-3 ease-out transition duration-500"
                      : null
                  } `}
                >
                  Organisations
                </span>
              </button>

              <button
              onClick={
                () => setMyVar(2)
              }
                className={`flex justify-start mb-[12px] text-xl font-bold py-13px] px-[17px] items-center  mx-auto rounded-2xl w-[300px] h-[51px]  ${
                  myVar === 2
                    ? "bg-[#BA80E6] text-white ease-in-out transition-all duration-500"
                    : "bg-white text-[#BA80E6] border-[1px] hover:bg-[#E9D5F7] border-[#E9D5F7]"
                }`}
              >
                {myVar === 2 && <Loader />}
                <span
                  className={`${
                    myVar === 2
                      ? "translate-x-3 ease-out transition duration-500"
                      : null
                  } `}
                >
                  Employees
                </span>
              </button>

              <button
              onClick={
                () => setMyVar(3)
              }
                className={`flex text-left justify-start mb-[12px] text-xl font-bold py-13px] px-[17px] items-center  mx-auto rounded-2xl w-[300px] h-[81px]  ${
                  myVar === 3
                    ? "bg-[#BA80E6] text-white ease-in-out transition-all duration-500"
                    : "bg-white text-[#BA80E6] border-[1px] hover:bg-[#E9D5F7] border-[#E9D5F7]"
                }`}
              >
                {myVar === 3 && <Loader />}
                <span
                  className={`${
                    myVar === 3
                      ? "translate-x-3 ease-out transition duration-500"
                      : null
                  } `}
                >
                  Research & <br />
                  Development
                </span>
              </button>

              <button
              onClick={
                () => setMyVar(4)
              }
                className={`flex justify-start mb-[12px] text-xl font-bold py-13px] px-[17px] items-center  mx-auto rounded-2xl w-[300px] h-[51px]  ${
                  myVar === 4
                    ? "bg-[#BA80E6] text-white ease-in-out transition-all duration-1900"
                    : "bg-white text-[#BA80E6] border-[1px] hover:bg-[#E9D5F7] border-[#E9D5F7]"
                }`}
              >
                {myVar === 4 && <Loader />}
                <span
                  className={`${
                    myVar === 4
                      ? "translate-x-3 ease-out transition duration-500"
                      : null
                  } `}
                >
                  Cut work admin
                </span>
              </button>
            </div>
          </div>

          <div className="m-auto">
            <div className="w-[733px] h-[330px] bg-white rounded-3xl m-[9px] ">
              <div className="h-[170px] text-center m-auto">
                {myVar === 1 ? (
                  <div className="text-[9rem] py-0 font-semibold text-center text-[#BA80E6]">
                    200K + 
                    <div className="text-[2rem] pb-7">worldwide</div>
                  </div>
                ) : myVar === 2 ? (
                  <div className="text-[9rem] py-0 font-semibold text-center text-[#BA80E6]">
                    1Mn + 
                    <div className="text-[2rem] pb-7">worldwide</div>
                  </div>
                ) : myVar === 3 ? (
                  <div className="text-[9rem] py-0 font-semibold text-center text-[#BA80E6]">
                    $300Mn + 
                    <div className="text-[2rem] pb-7">per year</div>
                  </div>
                ) : myVar === 4 ? (
                  <div className="text-[9rem] py-0 font-semibold text-center text-[#BA80E6]">
                    42%  
                    <div className="text-[2rem] pb-7">average time saved</div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
