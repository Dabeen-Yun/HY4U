import MainNav from "../../components/nav";
import MbtiSelect from "../../components/mbtiselect";
import { client } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Question {
  id: number;
  positive: string;
  negative: string;
  text: string;
}

function Test() {
  const router = useRouter();
  const [result, setResult] = useState(Array(40));
  const getQuestions = () => {
    return client.get("polls/questions/").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Question[]>(["questions"], getQuestions);

  const setValue = (index: number, value: string) => {
    const temp = [...result];
    temp[index] = value;
    setResult(temp);
  };

  const getCount = (word: string) => {
    let count = 0;
    const resultText = result.join("");
    for (let i = 0; i < resultText.length; i++) {
      if (resultText.at(i) === word) {
        count++;
      }
    }
    return count;
  };

  const onValid = async () => {
    const data = {
      S: getCount("S"),
      O: getCount("O"),
      A: getCount("A"),
      T: getCount("T"),
      D: getCount("D"),
      C: getCount("C"),
      P: getCount("P"),
      E: getCount("E"),
    };
    const response = await client
      .post("polls/result/", data)
      .then((res) => res.data);
    if (response.id) {
      router.push(`/mbti/result/${response.id}`);
    }
  };
  if (isLoading) return <div></div>;
  return (
    <div>
      <MainNav title={"logo"} />
      <div className="w-[350px] m-auto mt-5">
        {data?.map((question, idx) => {
          return (
            <div className="w-[350px] shadow-xl rounded-xl bg-[#FFFFFF] mb-5">
              <div className="font-bold text-[16px] p-5">
                <span>
                  {idx + 1}. {question.text}
                </span>
              </div>
              <MbtiSelect
                positive={question.positive}
                negative={question.negative}
                selectValue={(value) => setValue(idx, value)}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={onValid}
        className="bg-[#2E7BFF] text-center text-white w-[340px] h-[60px] rounded-lg m-auto flex justify-center items-center mb-[80px]"
      >
        검사 완료
      </button>
    </div>
  );
}

export default Test;
