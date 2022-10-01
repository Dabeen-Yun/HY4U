import MainNav from "../../components/nav";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <>
      <MainNav title={"logo"} />
      <div className="mt-[30px] p-8">
        <h2 className="text-[#0E4A84]">대학교 검색</h2>
        <p className="text-[#767676]">
          학교 검색을 통해 재학중인 학교를 선택해주세요.
        </p>
        <div className="flex justify-center mt-4">
          <input
            className="w-[330px] h-[50px] p-3 rounded-lg text-[18px]"
            type="text"
            placeholder="학교이름을 검색하세요"
          />
        </div>
        <div className="mt-10">
          <p className="text-center text-[#767676] text-[14px]">
            목록에 학교 이름이 없나요?
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                router.push("/login/login");
              }}
              className="w-[350px] h-[50px] bg-[#2E7BFF] rounded-lg m-auto text-white mt-3 "
            >
              ASSIST 시작하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
