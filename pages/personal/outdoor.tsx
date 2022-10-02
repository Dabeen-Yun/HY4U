import MainNav from "../../components/nav";
import { useRouter } from "next/router";

function Outdoor() {
  const router = useRouter();
  return (
    <div>
      <MainNav title={"대외활동추천"} />
      <div className="w-[350px] m-auto bg-white rounded-xl shadow-xl flex flex-col mt-5">
        <span className="font-bold text-[18px] mt-5 ml-5">
          현대자동차 해피무브 대학생 봉사단
        </span>
        <span className="text-[14px] text-[#767676] mt-[5px] ml-5">
          (주)현대자동차그룹
        </span>
        <div className="w-[310px] m-auto bg-[#F8F8FA] rounded-xl mt-5">
          <div className="m-[10px] text-[14px]">
            해피무브 글로벌 청년봉사단원은 오리엔테이션을 거쳐 해외로 파견되며
            각 나라의 특성에 따라 지역봉사, 문화봉사, 환경봉사, 교육봉사 등의
            봉사활동을 펼칩니다. 귀국 후에는 사후 커뮤니티를 통해 다양한
            국내활동에 참여함으로써 글로벌 청년 리더로서의 지속적인 활동이
            가능합니다.
          </div>
        </div>
        <div className="flex flex-row w-[310px] m-auto text-[#767676] text-[14px] my-5 items-center">
          <div className="flex flex-col space-y-[10px]">
            <span>모집대상</span>
            <span>모집인원</span>
            <span>모집일정</span>
            <span>면접일정</span>
          </div>
          <svg
            className="mx-5"
            width="2"
            height="102"
            viewBox="0 0 2 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 0V102" stroke="#D9D9D9" />
          </svg>
          <div className="flex flex-col space-y-[10px]">
            <span>전국 대학(원)생</span>
            <span>100명</span>
            <span>2022.08.29-2022.09.03</span>
            <span>2022.09.08-2022.09.09</span>
          </div>
        </div>
      </div>
      <button
        className="w-[350px] h-[60px] bg-[#2E7BFF] rounded-lg m-auto text-white flex justify-center shadow-xl items-center font-bold text-[16px] mt-5"
        onClick={() => {
          router.push("/");
        }}
      >
        홈페이지 바로가기
      </button>
      <div className="w-[350px] m-auto bg-white rounded-xl shadow-xl flex flex-col mt-5">
        <span className="text-[14px] mt-5 ml-5">분석결과</span>
        <span className="text-[14px] text-[#767676] mt-[5px] ml-5 w-[310px] m-auto">
          본인은 다양한 분야에 대한 간문학적인 사고를 하는것을 좋아하며,
          협업하며 학습하는 방식에 최적화 되어있습니다. 또한 예술에 대한
          관심도가 타 학생보다 월등히 높고, 수강했던 과목도 다수 연관되어
          있습니다.
        </span>
        <div className="w-[310px] m-auto bg-[#F8F8FA] rounded-xl mt-5">
          <div className="m-[10px] text-[14px]">
            해피무브 글로벌 청년봉사단원은 오리엔테이션을 거쳐 해외로 파견되며
            각 나라의 특성에 따라 지역봉사, 문화봉사, 환경봉사, 교육봉사 등의
            봉사활동을 펼칩니다. 귀국 후에는 사후 커뮤니티를 통해 다양한
            국내활동에 참여함으로써 글로벌 청년 리더로서의 지속적인 활동이
            가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outdoor;
