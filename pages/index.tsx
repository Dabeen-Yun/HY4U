import MainNav from "../components/nav";
import Image from "next/image";
import Menu from "../components/menu";

function Home() {
  return (
    <>
      <MainNav title={"logo"} />
      <div className="p-2">
        <div className="flex items-center text-center justify-center"></div>
        <div className="flex justify-evenly flex-wrap ">
          <Menu
            title="포트폴리오"
            des="이력서/개인정보"
            src="/images/portfolio.png"
          />
          <Menu
            title="교내정보"
            des="졸업 로드맵/과목추천"
            src="/images/hanyang.png"
          />
          <Menu
            title="교외정보"
            des="대외활동/동아리추천"
            src="/images/cup.png"
          />
          <Menu
            title="장학/취업"
            des="교외장학/취업정보"
            src="/images/coin.png"
          />
        </div>
        <div className="bg-white rounded-lg w-[350px] h-[320px] m-auto mt-[20px] p-6 mb-20 ">
          <div className="flex items-center space-x-3 text-[22px] font-bold">
            <Image
              src="/images/info.png"
              alt="information"
              layout="intrinsic"
              width={30}
              height={35}
            />
            <h2>맞춤 알림</h2>
          </div>
          <div>
            <p className="font-normal text-[#767676] text-[14px]">
              나에게 맞는 중요한 정보확인이 가능합니다.
            </p>
          </div>
          <div className="flex justify-around space-x-3  text-center mt-[20px]">
            <div className="bg-[#F8F8FA] w-[97px] h-[100px] rounded-xl p-2">
              <h2 className="text-[#767676] mt-[10px]">교내알림</h2>
              <p className="text-[#2E7BFF] text-[24px] font-bold mt-2">10</p>
            </div>
            <div className="bg-[#F8F8FA] w-[97px] h-[100px] rounded-xl p-2">
              <h2 className="text-[#767676]  mt-[10px]">교내알림</h2>
              <p className="text-[#2E7BFF] text-[24px]  font-bold  mt-2">3</p>
            </div>
            <div className="bg-[#F8F8FA] w-[97px] h-[100px] rounded-xl p-2">
              <h2 className="text-[#767676]  mt-[10px]">교내알림</h2>
              <p className="text-[#2E7BFF] text-[24px]  mt-2 font-bold">5</p>
            </div>
          </div>
          <div className="bg-[#F8F8FA] w-[303px] h-[86px] rounded-xl mt-3 p-2">
            <div className="text-[14px] flex justify-evenly mt-3 ">
              <p className="text-[#767676]">등록금 납부기간</p>
              <p className="text-[#2E7BFF]">2020.08.29(월) 24:00</p>
            </div>
            <div className="text-[14px] flex justify-evenly mt-2">
              <p className="text-[#767676]">등록금 납부기간</p>
              <p className="text-[#2E7BFF]">2020.08.29(월) 24:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
