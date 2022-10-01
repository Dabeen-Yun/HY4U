import Image from "next/image";
import MainNav from "../../components/nav";
import { useForm } from "react-hook-form";

interface userData {
  id: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<userData>();
  return (
    <div>
      <MainNav />
      <div className="px-[30px] mt-[50px] h-full ">
        <div className="h-[90px]">
          <Image
            alt="logo"
            src="/images/hanyang.png"
            height={75}
            width={75}
            layout="intrinsic"
          />
        </div>
        <div className="mt-[40px] h-[130px]">
          <h3 className="text-[#0E4A84] text-[18px] font-bold">
            한양대학교 포털 HY-in 로그인
          </h3>
          <p className="mt-[10px] font-normal text-[#767676] text-[16px]">
            한양대학교 포털 한양인 계정으로 서비스를
            <br /> 이용하실 수 있습니다.
          </p>
        </div>
        <div>
          <input
            className="w-[310px] h-[40px] p-4 rounded-lg"
            {...register("id")}
            placeholder="아이디"
          />
          <input
            className="w-[310px] h-[40px] mt-[10px] p-4 rounded-lg"
            {...register("password")}
            placeholder="비밀번호"
          />
        </div>

        <div className="mt-[20px] text-[14px] h-[400px] ">
          <p className="text-[#767676] text-center">아이디 / 비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
