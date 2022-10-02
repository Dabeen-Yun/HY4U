import MainNav from "../../components/nav";
import { client } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atom/user";
import React from "react";
import { useRouter } from "next/router";

function Portfolio() {
  const router = useRouter();

  const id = router.query.id;

  const getResult = (id: string) => {
    return client.get(`polls/result/${id}/`).then((res) => res.data);
  };

  const { data, isLoading } = useQuery(["result", id], () => getResult(id));

  console.log(data);

  const makeRatio = (ratio: number) => {
    return (ratio * 100).toString().slice(0, 2);
  };
  const [getUser, _] = useRecoilState(userState);

  if (isLoading) return <div></div>;

  return (
    <div>
      <MainNav title={"포트폴리오"} />
      <div className="w-[350px] m-auto ">
        <div className="bg-white shadow-xl rounded-xl mt-5">
          <div className="flex flex-row justify-between mx-5 items-center">
            <span className="text-[16px]">Design Enginner & Developer</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5832 8.19038L11.2499 4.85704M1.6665 17.7737L4.48681 17.4603C4.83139 17.4221 5.00367 17.4029 5.16471 17.3508C5.30758 17.3045 5.44354 17.2392 5.56891 17.1565C5.71022 17.0633 5.83279 16.9408 6.07794 16.6956L17.0832 5.69038C18.0037 4.7699 18.0037 3.27752 17.0832 2.35704C16.1627 1.43657 14.6703 1.43657 13.7499 2.35704L2.74461 13.3623C2.49946 13.6074 2.37688 13.73 2.2837 13.8713C2.20103 13.9967 2.13568 14.1326 2.08943 14.2755C2.0373 14.4365 2.01816 14.6088 1.97987 14.9534L1.6665 17.7737Z"
                stroke="#767676"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-4 border border-b " />
          <div className="flex flex-row mx-5 mt-5 pb-5">
            <div className="w-[78px] h-[100px] bg-gray-400" />
            <div className="flex flex-col ml-5">
              <div className="flex flex-row ">
                <div className="text-[14px]">{getUser.name}</div>
                <div className="text-[#767676] text-[12px] ml-1">(남/22)</div>
              </div>
              <div className="flex flex-col mt-5 text-[#767676] text-[12px]">
                <div>010-1234-5678</div>
                <div>hanyang@naver.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-xl">
          <div className="bg-[#F8F8FA] py-4 pl-5 rounded-t-xl shadow-xl flex flex-col mt-5">
            <div className="flex flex-row justify-between px-5">
              <span>학습유형</span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5832 8.19037L11.2499 4.85704M1.6665 17.7737L4.48681 17.4603C4.83139 17.4221 5.00367 17.4029 5.16471 17.3508C5.30758 17.3045 5.44354 17.2392 5.56891 17.1565C5.71022 17.0633 5.83279 16.9407 6.07794 16.6956L17.0832 5.69037C18.0037 4.7699 18.0037 3.27751 17.0832 2.35704C16.1627 1.43656 14.6703 1.43656 13.7499 2.35703L2.74461 13.3623C2.49946 13.6074 2.37688 13.73 2.2837 13.8713C2.20103 13.9967 2.13568 14.1326 2.08943 14.2755C2.0373 14.4365 2.01816 14.6088 1.97987 14.9534L1.6665 17.7737Z"
                  stroke="#767676"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="border border-b my-4" />
          <div className="w-[350px] mt-5 flex m-auto">
            <div className="mbtiResult rounded-xl shadow-xl flex flex-col justify-center items-center w-[350px] bg-[#FFFFFF]">
              <div className="flex flex-row font-bold text-[20px] mt-5">
                <span>{getUser.name}</span>
                <span>님의 학습유형</span>
              </div>
              <div className="font-bold text-[40px] text-[#2E7BFF] flex items-center mt-[10px]">
                {data?.msti}
              </div>
              <div className="n/n">
                <div className="S/O flex flex-row mt-5">
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.s_ratio) > makeRatio(data.o_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      S
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.s_ratio)}%
                    </span>
                  </div>
                  <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                    <div
                      className={`h-[10px] bg-[#2E7BFF] ${
                        makeRatio(data.s_ratio) > makeRatio(data.o_ratio)
                          ? `w-[240 * ${data.s_ratio}px]`
                          : `flex items-end w-[130px]`
                      } rounded-xl  absolute`}
                    />
                    <div className="font-bold text-[14px] pt-5 flex justify-center ">
                      <span
                        className={`${
                          makeRatio(data.s_ratio) > makeRatio(data.o_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        주관적
                      </span>
                      <span>/</span>
                      <span
                        className={`${
                          makeRatio(data.o_ratio) > makeRatio(data.s_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        객관적
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.o_ratio) > makeRatio(data.s_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      O
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.o_ratio)}%
                    </span>
                  </div>
                </div>
                <div className="A/T flex flex-row mt-5">
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.a_ratio) > makeRatio(data.t_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      A
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.a_ratio)}%
                    </span>
                  </div>
                  <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                    <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                    <div className="font-bold text-[14px] pt-5 flex justify-center ">
                      <span
                        className={`${
                          makeRatio(data.a_ratio) > makeRatio(data.t_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        행동중시
                      </span>
                      <span>/</span>
                      <span
                        className={`${
                          makeRatio(data.t_ratio) > makeRatio(data.a_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        전략중시
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.t_ratio) > makeRatio(data.a_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      T
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.t_ratio)}%
                    </span>
                  </div>
                </div>
                <div className="D/C flex flex-row mt-5">
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.d_ratio) > makeRatio(data.c_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      D
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.d_ratio)}%
                    </span>
                  </div>
                  <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                    <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                    <div className="font-bold text-[14px] pt-5 flex justify-center ">
                      <span
                        className={`${
                          makeRatio(data.d_ratio) > makeRatio(data.c_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        타의의존
                      </span>
                      <span>/</span>
                      <span
                        className={`${
                          makeRatio(data.c_ratio) > makeRatio(data.d_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        자기확신
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.c_ratio) > makeRatio(data.d_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      C
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.c_ratio)}%
                    </span>
                  </div>
                </div>
                <div className="P/E flex flex-row mt-5">
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.p_ratio) > makeRatio(data.e_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      P
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.p_ratio)}%
                    </span>
                  </div>
                  <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                    <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                    <div className="font-bold text-[14px] pt-5 flex justify-center ">
                      <span
                        className={`${
                          makeRatio(data.p_ratio) > makeRatio(data.e_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        원칙주의
                      </span>
                      <span> / </span>
                      <span
                        className={`${
                          makeRatio(data.e_ratio) > makeRatio(data.p_ratio)
                            ? "text-[#2E7BFF]"
                            : "text-[#D9D9D9]"
                        }`}
                      >
                        융통성
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex items-center">
                    <span
                      className={`font-bold text-[30px] ${
                        makeRatio(data.e_ratio) > makeRatio(data.p_ratio)
                          ? "text-[#2E7BFF]"
                          : "text-[#D9D9D9]"
                      }`}
                    >
                      E
                    </span>
                    <span className="text-[14px] text-[#767676]">
                      {makeRatio(data.e_ratio)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[310px] bg-[#F8F8FA] rounded-xl my-5">
                <div className="my-4 mx-5">
                  <div className="text-[14px]">분석결과</div>
                  <div className="mt-[10px] text-[14px] text-[#767676]">
                    당신은 잠재력 있는 원칙주의자입니다. 상황에 따라 본인의
                    주관이 바뀔 수 있고, 책을 읽거나 강의 듣는 것을 좋아합니다.
                    타인의 영향을 받는 유형으로, 스터디나 팀플을 선호하며 마음을
                    기댈 수 있는 사람이 필요합니다. 계획 내에서는 좋은 결과를
                    거두는 편이지만 예상치 못한 상황이 발생할 경우
                    혼란스러워합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
