import { useForm } from "react-hook-form";
import MainNav from "../../components/nav";
import { client } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface UserData {
  grade: string;
  id: number;
  majors: majorData[];
  name: string;
  student_id: string;
  user: number;
}
interface majorData {
  category: string;
  department: {
    division: string;
    name: string;
  };
}
interface userForm {
  campus: string;
  major: string;
  Department: string;
  grade: string;
  studentId: string;
  name: string;
}

function Information() {
  const getUserInfo = () => {
    return client.get("students/info/").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<UserData>(["UserInfo"], getUserInfo);

  const { register, handleSubmit, setValue } = useForm<userForm>();

  useEffect(() => {
    setValue("campus", "한양대학교(ERICA) 캠퍼스");
    setValue("major", data?.majors[0].department.division ?? "");
    setValue("Department", data?.majors[0].department.name ?? "");
    setValue("grade", data?.grade ?? "");
    setValue("studentId", data?.student_id ?? "");
    setValue("name", data?.name ?? "");
  }, [data]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <MainNav title={"logo"} />
      <form>
        <div className="rounded-lg bg-white w-[350px] m-auto mt-[20px] p-4">
          <div className="flex">
            <h2 className="text-[18px] font-bold">개인정보</h2>
          </div>

          <div className="flex justify-evenly mt-[20px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">캠퍼스</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("campus")}
            />
          </div>
          <div className="flex justify-evenly mt-[10px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">단과대학</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("major")}
            />
          </div>
          <div className="flex justify-evenly mt-[10px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">학과(부)</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("Department")}
            />
          </div>
          <div className="flex justify-evenly mt-[10px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">학년</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("grade")}
            />
          </div>
          <div className="flex justify-evenly mt-[10px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">학번</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("studentId")}
            />
          </div>
          <div className="flex justify-evenly mt-[10px] items-center">
            <p className="text-[#767676] text-[16px] w-[60px]">이름</p>
            <input
              className="border-[1px] rounded-lg w-[220px] h-[40px] p-3"
              {...register("name")}
            />
          </div>
        </div>
        <div>
          <p className="text-[#2E7BFF] text-[14px] text-center mt-[20px]">
            + 부전공/복수전공/융합전공 추가
          </p>
        </div>
        <div className="text-[14px] text-center mt-[200px] mb-[20px]">
          <p className="text-[#767676]">
            개인정보는 추후 <span className="text-[#2E7BFF]">마이페이지</span>
            에서 수정가능합니다.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-[350px] h-[60px] bg-[#2E7BFF] rounded-lg m-auto text-white ">
            저장하기
          </button>
        </div>
      </form>
    </>
  );
}

export default Information;
