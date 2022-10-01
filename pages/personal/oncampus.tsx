import MainNav from "../../components/nav";
import React from "react";

function OnCampus() {
  return (
    <div>
      <MainNav title={"교내정보"} />
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row mt-5">
              <img src="/images/stair.png" alt="졸업로드맵" />
              <div className="flex flex-col ml-[10px]">
                <span className="font-bold text-[18px]">졸업 로드맵</span>
                <span className="text-[14px]">40/140학점(29%)</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px]">
              <span className="text-[12px]">1학년 1학기(18학점)</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-[17px]">
                  누적학점 : 18
                </span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px]">
              <span className="text-[12px]">11학년 2학기(16학점)</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-[17px]">
                  누적학점 : 34
                </span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px]">
              <span className="text-[12px]">)1학년 겨울학기(6학점)</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-[17px]">
                  누적학점 : 40
                </span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px]">
              <span className="text-[12px]">1학년 1학기(18학점)</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-[17px]">
                  미이수
                </span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row mt-5">
              <img src="/images/magnifying.png" alt="과목추천" />
              <div className="flex flex-col ml-[10px]">
                <span className="font-bold text-[18px]">과목추천</span>
                <span className="text-[14px]">
                  나에게 맞는 과목을 추천합니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px] rounded-xl">
              <span className="text-[12px]">전공과목</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-11">10과목</span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#F8F8FA] py-4 px-5 mt-[10px] rounded-xl">
              <span className="text-[12px]">교양과목</span>
              <div className="flex flex-row items-center">
                <span className="text-[10px] text-[#2E7BFF] mr-11">8과목</span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L6.5 7L1 1"
                    stroke="#767676"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] m-auto mt-5">
        <div className="m-5 rounded-xl bg-white shadow-xl">
          <div className="flex flex-col p-5">
            <div className="flex flex-row mt-5">
              <img src="/images/square.png" alt="제2전공 추천" />
              <div className="flex flex-col ml-[10px]">
                <span className="font-bold text-[18px]">제2전공 추천</span>
                <span className="text-[14px]">
                  나에게 맞는 제2전공을 추천합니다.
                </span>
              </div>
            </div>
            <div className="flex flex-row rounded-xl bg-[#F8F8FA] py-[13px] text-[12px]">
              <span className="ml-[10px]">순위</span>
              <span className="ml-5">전공명</span>
              <span className="ml-[95px]">유사도</span>
            </div>
            <div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">1</span>
                <span className="ml-5 text-[12px]">디자인공학전공</span>
                <span className="ml-[65px]">80%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">2</span>
                <span className="ml-5 text-[12px]">컴퓨터소프트웨어학부</span>
                <span className="ml-[30px]">50%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">3</span>
                <span className="ml-5 text-[12px]">전자공학부</span>
                <span className="ml-[91px]">43%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px] border-b ">
                <span className="ml-4">4</span>
                <span className="ml-5 text-[12px]">기계공학부</span>
                <span className="ml-[93px]">42%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
              <div className="flex flex-row rounded-xl py-[13px] text-[14px]">
                <span className="ml-4">5</span>
                <span className="ml-5">실내인테리어학과</span>
                <span className="ml-[40px]">39%</span>
                <span className="cursor-pointer text-[8px] flex items-center justify-center text-[#2E7BFF]">
                  자세히
                </span>
              </div>
            </div>
            <div className="w-[270px] bg-[#F8F8FA] rounded-xl mb-5 m-auto flex justify-center">
              <div className="my-4 mx-5">
                <div className="text-[14px]">분석결과</div>
                <div className="mt-[10px] text-[12px] text-[#767676]">
                  본인은 다양한 분야에 대한 간문학적인 사고를 하는것을 좋아하며,
                  협업하며 학습하는 방식에 최적화 되어있습니다. 또한 예술에 대한
                  관심도가 타 학생보다 월등히 높고, 수강했던 과목도 다수
                  연관되어 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnCampus;
