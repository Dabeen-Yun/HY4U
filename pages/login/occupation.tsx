import React, { useEffect, useState } from "react";
import axios from "axios";
import MainNav from "../../components/nav";

interface jobs {
  id: number;
  title: string;
  backdrop_image: string;
}

interface interests {
  id: number;
  title: string;
  backdrop_image: string;
}

function Occupation() {
  const [list, setList] = useState<jobs[]>([]);
  const [interest, setInterest] = useState<interests[]>([]);

  useEffect(() => {
    axios
      .get("http://cashup.iptime.org:8000/polls/jobs/")
      .then((response) => {
        setList([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://cashup.iptime.org:8000/polls/fields/")
      .then((response) => {
        setInterest([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <MainNav title={"logo"} />
      <div className="w-[350px] m-auto rounded-xl bg-[#FFFFFF] shadow-xl mt-5 pb-5">
        <div className="p-5">
          <span className="font-bold text-[16px]">
            나의 희망직종(다중선택 가능)
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[10px] px-5">
          {list.map((job, index) => {
            return (
              <div className="rounded-xl relative" key={index}>
                <img src={job.backdrop_image} width={150} height={150} />
                <div className="flex justify-center items-center">
                  <span className="absolute text-white text-[20px] font-bold z-10 top-[66px]">
                    {job.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[350px] m-auto rounded-xl bg-[#FFFFFF] shadow-xl mt-5 pb-5 mb-[100px]">
        <div className="p-5">
          <span className="font-bold text-[16px]">
            나의 관심분야(다중선택 가능)
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[10px] px-5">
          {interest.map((interest, index) => {
            return (
              <div className="rounded-xl relative" key={index}>
                <img src={interest.backdrop_image} width={150} height={150} />
                <div className="flex justify-center items-center">
                  <span className="absolute text-white text-[20px] font-bold z-10 top-[66px]">
                    {interest.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Occupation;
