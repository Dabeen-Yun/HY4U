import MainNav from "../../components/nav";
import React from "react";
import { useRouter } from "next/router";

function Recruit() {
  const router = useRouter();
  return (
    <div>
      <MainNav title={"취업/장학"} />
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row mt-5 justify-between mb-5">
              <div className="flex flex-row">
                <img
                  src="/images/pic.png"
                  alt="취업정보"
                  width={37}
                  height={44}
                />
                <div className="flex flex-col ml-[10px]">
                  <span className="font-bold text-[18px]">취업정보</span>
                  <span className="text-[14px]">취업정보를 알려드립니다.</span>
                </div>
              </div>
              <svg
                className="cursor-pointer"
                onClick={() => {
                  router.push("./outdoor");
                }}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
                  stroke="#767676"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row rounded-xl bg-[#F8F8FA] py-[13px] text-[12px]">
              <span className="ml-[10px]">순위</span>
              <span className="ml-5">기업명</span>
              <span className="ml-[95px]">유사도</span>
            </div>
            <div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교내</span>
                <span className="ml-5 text-[12px]">(주)삼성 SDS</span>
                <span className="ml-[50px]">80%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교외</span>
                <span className="ml-5 text-[12px]">(주)네이버</span>
                <span className="ml-[65px]">50%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교외</span>
                <span className="ml-5 text-[12px]">(주)카카오</span>
                <span className="ml-[65px]">43%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교내</span>
                <span className="ml-5 text-[12px]">(주)현재자동차그</span>
                <span className="ml-[35px]">42%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px]">
                <span className="ml-4">교내</span>
                <span className="ml-5">(사)사단법인SQ</span>
                <span className="ml-[30px]">39%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row justify-between mt-5 mb-5">
              <div className="flex flex-row">
                <img
                  src="/images/hifive.png"
                  alt="교외장학정보"
                  width={37}
                  height={44}
                />
                <div className="flex flex-col ml-[10px]">
                  <span className="font-bold text-[18px]">교외장학정보</span>
                  <span className="text-[14px]">
                    교외장학정보를 알려드립니다.
                  </span>
                </div>
              </div>
              <svg
                className="cursor-pointer"
                onClick={() => {
                  router.push("./outdoor");
                }}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
                  stroke="#767676"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row rounded-xl bg-[#F8F8FA] py-[13px] text-[12px]">
              <span className="ml-[10px]">순위</span>
              <span className="ml-5">장학명</span>
              <span className="ml-[95px]">지원자격</span>
            </div>
            <div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">1</span>
                <span className="ml-5 text-[12px]">한국장학재단 국가장</span>
                <span className="ml-[40px]">충족</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">2</span>
                <span className="ml-5 text-[12px]">한국장학재단 다자녀</span>
                <span className="ml-[40px]">충족</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">3</span>
                <span className="ml-5 text-[12px]">지방대학 특별장학</span>
                <span className="ml-[50px]">충족</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">4</span>
                <span className="ml-5 text-[12px]">LG 대학생 지원장학</span>
                <span className="ml-[45px]">충족</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px]">
                <span className="ml-4">5</span>
                <span className="ml-5">한국장학재단 이공계</span>
                <span className="ml-[25px] text-[#FD6D78]">불충족</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruit;
