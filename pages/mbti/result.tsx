import MainNav from "../../components/nav";
import type { CSSProperties } from "react";

export const wordBreak: CSSProperties = {
  wordBreak: "keep-all",
};

function Result() {
  return (
    <div>
      <MainNav title={"logo"} />
      <div className="w-[350px] mt-5 flex m-auto">
        <div className="mbtiResult rounded-xl shadow-xl flex flex-col justify-center items-center w-[350px] bg-[#FFFFFF]">
          <div className="flex flex-row font-bold text-[20px] mt-5">
            <span>김한양</span>
            <span>님의 학습유형</span>
          </div>
          <div className="font-bold text-[40px] text-[#2E7BFF] flex items-center mt-[10px]">
            SADP
          </div>
          <div className="n/n">
            <div className="S/O flex flex-row mt-5">
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#2E7BFF]">S</span>
                <span className="text-[14px] text-[#767676]">54%</span>
              </div>
              <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                <div className="font-bold text-[14px] pt-5 flex justify-center ">
                  <span className="text-[#2E7BFF]">주관적</span>
                  <span>/</span>
                  <span>객관적</span>
                </div>
              </div>
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#D9D9D9]">O</span>
                <span className="text-[14px] text-[#767676]">46%</span>
              </div>
            </div>
            <div className="A/T flex flex-row mt-5">
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#2E7BFF]">A</span>
                <span className="text-[14px] text-[#767676]">54%</span>
              </div>
              <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                <div className="font-bold text-[14px] pt-5 flex justify-center ">
                  <span className="text-[#2E7BFF]">행동중시</span>
                  <span>/</span>
                  <span>전략중시</span>
                </div>
              </div>
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#D9D9D9]">T</span>
                <span className="text-[14px] text-[#767676]">46%</span>
              </div>
            </div>
            <div className="D/C flex flex-row mt-5">
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#2E7BFF]">D</span>
                <span className="text-[14px] text-[#767676]">54%</span>
              </div>
              <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                <div className="font-bold text-[14px] pt-5 flex justify-center ">
                  <span className="text-[#2E7BFF]">타의의존</span>
                  <span>/</span>
                  <span>자기확신</span>
                </div>
              </div>
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#D9D9D9]">C</span>
                <span className="text-[14px] text-[#767676]">46%</span>
              </div>
            </div>
            <div className="P/E flex flex-row mt-5">
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#2E7BFF]">P</span>
                <span className="text-[14px] text-[#767676]">54%</span>
              </div>
              <div className="w-[240px] h-[10px] bg-[#D9D9D9] rounded-xl mt-[19px] mx-[10px] relative">
                <div className="h-[10px] bg-[#2E7BFF] rounded-xl w-[130px] absolute" />
                <div className="font-bold text-[14px] pt-5 flex justify-center ">
                  <span className="text-[#2E7BFF]">원칙주의</span>
                  <span>/</span>
                  <span>융통성</span>
                </div>
              </div>
              <div className="flex flex-col flex items-center">
                <span className="font-bold text-[30px] text-[#D9D9D9]">E</span>
                <span className="text-[14px] text-[#767676]">46%</span>
              </div>
            </div>
          </div>
          <div className="w-[310px] bg-[#F8F8FA] rounded-xl my-5">
            <div className="my-4 mx-5">
              <div className="text-[14px]">분석결과</div>
              <div className="mt-[10px] text-[14px] text-[#767676]">
                당신은 잠재력 있는 원칙주의자입니다. 상황에 따라 본인의 주관이
                바뀔 수 있고, 책을 읽거나 강의 듣는 것을 좋아합니다. 타인의
                영향을 받는 유형으로, 스터디나 팀플을 선호하며 마음을 기댈 수
                있는 사람이 필요합니다. 계획 내에서는 좋은 결과를 거두는
                편이지만 예상치 못한 상황이 발생할 경우 혼란스러워합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] flex m-auto mt-5 flex-col space-y-5">
        <div className="s/o flex flex-row space-x-5">
          <div className="sBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#97BDFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px] items-center">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                S
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">주관적</span>
                <span className="text-[14px]">Subjectiveness</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px] mr-[10px]"
              style={wordBreak}
            >
              자기의 견해나 관점을 기초로 판단하며, 자신을 더 낮게 보거나 높게
              보는 등 정확한 평가가 어렵습니다.
            </span>
          </div>
          <div className="oBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#FFFFFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px] items-center">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                O
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">객관적</span>
                <span className="text-[14px]">Objectiveness</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px] text-[#767676]"
              style={wordBreak}
            >
              제3자의 입장에서 판단하며, 자신에 대한 평가가 정확하다. 하지만
              쉽게 부족함을 인지하여 멘탈관리가 어렵습니다.
            </span>
          </div>
        </div>
        <div className="a/t flex flex-row space-x-5">
          <div className="aBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#97BDFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px]">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                A
              </span>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[14px]">행동중시</span>
                <span className="text-[14px]">Action</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px]"
              style={wordBreak}
            >
              책을 읽거나 강의를 듣는 것을 좋아하며, 정답보다는 문제를 해결하는
              과정을 아는것을 중요시합니다.
            </span>
          </div>
          <div className="tBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#FFFFFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px] items-center">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                T
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">전략중시</span>
                <span className="text-[14px]">Tactics</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px] text-[#767676]"
              style={wordBreak}
            >
              문제를 해결하고 결과를 만들어 내는 것을 좋아하며, 원리에 대한
              이해보다는 어떻게 좋은 결과를 만들어낼지에 집중합니다.
            </span>
          </div>
        </div>
        <div className="d/c flex flex-row space-x-5">
          <div className="dBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#97BDFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px]">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                D
              </span>
              <div>
                <span className="font-bold text-[14px]">타인의존</span>
                <span className="text-[14px]">Dependency</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px]"
              style={wordBreak}
            >
              계획과 실험, 점검의 측면에서 타인의 영향을 받이 받습니다. 스터디나
              팀플 등 함께하는 활동을 선호합니다.
            </span>
          </div>
          <div className="cBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#FFFFFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px] items-center">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                C
              </span>
              <div>
                <span className="font-bold text-[14px]">자기확신</span>
                <span className="text-[14px]">Confidence</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px] text-[#767676]"
              style={wordBreak}
            >
              확고한 생각을 가지고 판단하며, 목표만 보고 나아갑니다. 하지만
              잘못된 판단일 경우 성취가 장기화될 수 있습니다.
            </span>
          </div>
        </div>
        <div className="p/e flex flex-row space-x-5">
          <div className="pBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#97BDFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px]">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                P
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">원칙주의</span>
                <span className="text-[14px]">Principle</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px]"
              style={wordBreak}
            >
              계획을 세워 행동하는 유형으로 계획 내에서는 좋은 결과를 거두지만,
              예상 밖의 상황에서는 혼란스러워합니다.
            </span>
          </div>
          <div className="eBox w-[165px] h-[165px] rounded-xl flex flex-col bg-[#FFFFFF] shadow-xl">
            <div className="flex flex-row ml-5 mt-[6px] items-center">
              <span className="font-bold text-[40px] text-[#2E7BFF] mr-[10px]">
                E
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">융통성</span>
                <span className="text-[14px]">Elasticity</span>
              </div>
            </div>
            <span
              className="ml-[10px] mb-[10px] text-[12px] mt-[19px] text-[#767676]"
              style={wordBreak}
            >
              상황의 변화에 맞춰 효율적인 방법을 강구합니다. 하지만 한 가지
              문제에 집중하지 못하고 이탈할 가능성이 큽니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
