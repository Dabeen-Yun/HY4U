import MainNav from "../../components/nav";
import React from "react";
import { useRouter } from "next/router";

function Extracurricular() {
  const router = useRouter();
  return (
    <div>
      <MainNav title={"교외정보"} />
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row mt-5">
              <img
                src="/images/world.png"
                alt="대외활동추천"
                width={37}
                height={44}
              />
              <div className="flex flex-col ml-[10px]">
                <span className="font-bold text-[18px]">대외활동추천</span>
                <span className="text-[14px]">
                  나에게 맞는 대외활동을 추천합니다.
                </span>
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
              <span className="ml-5">대회활동명</span>
              <span className="ml-[95px]">유사도</span>
            </div>
            <div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">1</span>
                <span className="ml-5 text-[12px]">현대자동차 해피무브</span>
                <span className="ml-[30px]">80%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">2</span>
                <span className="ml-5 text-[12px]">CJ 도너스캠프 멘토</span>
                <span className="ml-[35px]">50%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">3</span>
                <span className="ml-5 text-[12px]">WFUNA 서포터즈</span>
                <span className="ml-[45px]">43%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">4</span>
                <span className="ml-5 text-[12px]">SK SUNNY 대학생 멘</span>
                <span className="ml-[25px]">42%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px]">
                <span className="ml-4">5</span>
                <span className="ml-5">LG Coding AI</span>
                <span className="ml-[55px]">39%</span>
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
            <div className="flex flex-row mt-5">
              <img
                src="/images/club.png"
                alt="동아리추천"
                width={37}
                height={44}
              />
              <div className="flex flex-col ml-[10px]">
                <span className="font-bold text-[18px]">동아리추천</span>
                <span className="text-[14px]">
                  나에게 맞는 동아리를 추천합니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row rounded-xl bg-[#F8F8FA] py-[13px] text-[12px]">
              <span className="ml-[10px]">순위</span>
              <span className="ml-5">동아리명</span>
              <span className="ml-[95px]">유사도</span>
            </div>
            <div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교내</span>
                <span className="ml-5 text-[12px]">함께하냥</span>
                <span className="ml-[85px]">80%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교외</span>
                <span className="ml-5 text-[12px]">영상동아리</span>
                <span className="ml-[75px]">50%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교외</span>
                <span className="ml-5 text-[12px]">농구동아리</span>
                <span className="ml-[75px]">43%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">교내</span>
                <span className="ml-5 text-[12px]">만취</span>
                <span className="ml-[110px]">42%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px]">
                <span className="ml-4">교내</span>
                <span className="ml-5">하늬바람</span>
                <span className="ml-[80px]">39%</span>
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

export default Extracurricular;
