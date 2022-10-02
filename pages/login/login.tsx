import Image from "next/image";
import MainNav from "../../components/nav";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom/login";
import { updateToken } from "../../utils/api";

interface userData {
  id: string;
  password: string;
}

function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<userData>();
  const [_, setAccess] = useCookies(["access_token"]);
  const [__, setRefresh] = useCookies(["refresh_token"]);
  const [___, setToken] = useRecoilState(loginState);

  const Login = async ({ id, password }: userData) => {
    const response = await axios.post(
      "http://cashup.iptime.org:8000/accounts/login/",
      {
        username: id,
        password: password,
      }
    );
    setAccess("access_token", response.data.access_token);
    setToken(response.data.access_token);
    setRefresh("refresh_token", response.data.refresh_token);
    if (response.status === 200) {
      updateToken(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      return true;
    }
    return false;
  };

  const onValid = async (data: userData) => {
    // const flag = await Login(data);

    router.push("/login/information");
  };

  return (
    <div>
      <MainNav title={"logo"} />
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
        <div className="text-center">
          <input
            className="w-[310px] h-[40px] p-4 rounded-lg"
            {...register("id")}
            placeholder="아이디"
          />
          <input
            className="w-[310px] h-[40px] mt-[10px] p-4 rounded-lg"
            {...register("password")}
            placeholder="비밀번호"
            type="password"
          />
        </div>

        <form className=" h-[300px]">
          <div className="mt-[20px] text-[14px] ">
            <p className="text-[#767676] text-center">아이디 / 비밀번호 찾기</p>
          </div>
          <button
            onClick={handleSubmit(onValid)}
            className="bg-[#2E7BFF] text-center text-white w-[340px] h-[60px] rounded-lg mt-[190px]"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
