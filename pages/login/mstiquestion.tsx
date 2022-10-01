import MainNav from "../../components/nav";
import { useRouter } from "next/router";

function MstiQuestion() {
  const router = useRouter();
  return (
    <>
      <MainNav title={"logo"} />
      <div className="flex justify-center mt-[20px] ">
        <div className="rounded-lg bg-white w-[350px] h-[270px] text-center p-3">
          <h2 className="text-[18px] font-bold">MSTI 학습유형검사</h2>
          <p>Method of Study Type Indicator</p>
          <p className="text-[#767676] mt-[20px]">
            개인의 학습성향을 분석하고, 맞춤형 기능을 <br />
            제공하기 위해 진행되는 검사입니다.
          </p>
          <div className="flex justify-evenly mt-8">
            <div>
              <p className="text-[30px] font-bold">40</p>
              <p>문제 수</p>
            </div>
            <div>
              <p className="text-[30px] font-bold">10분</p>
              <p>예상 소요시간</p>
            </div>
          </div>
          <div className="flex justify-around text-center"></div>
        </div>
      </div>
      <div className="flex justify-between relative top-16">
        <button
          onClick={() => {
            router.push("../mbti/test");
          }}
          className="w-[350px] h-[60px] bg-[#2E7BFF] rounded-lg m-auto text-white "
        >
          시작하기
        </button>
      </div>
    </>
  );
}

export default MstiQuestion;
