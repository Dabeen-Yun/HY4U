import MainNav from "../../components/nav";
import MbtiSelect from "../../components/mbtiselect";

function Test() {
  return (
    <div>
      <MainNav title={"logo"} />
      <div className="w-[350px] m-auto mt-5">
        {[1, 2, 3, 4, 5].map((question, idx) => {
          return (
            <div className="w-[350px] shadow-xl rounded-xl bg-[#FFFFFF] mb-5">
              <div className="font-bold text-[16px] p-5">
                <span>{idx + 1}.</span>
                <span>
                  나는 어떤 사람의 행동을 이해하기 위해서는 그 사람의 성격뿐
                  아니라 처한 상황도 고려해야 한다고 생각한다.
                </span>
              </div>
              <MbtiSelect />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
