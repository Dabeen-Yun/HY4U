import { useEffect } from "react";
import { updateToken } from "../utils/api";
import { useCookies } from "react-cookie";

interface navProps {
  title: string;
}

function MainNav({ title }: navProps) {
  const [access_token, _] = useCookies(["access_token"]);

  useEffect(() => {
    updateToken(access_token.access_token);
  }, []);

  return (
    <div className="bg-[#0E4A84] h-[60px] flex justify-between p-3.5 ">
      <div className="mt-1.5">
        {title === "logo" ? (
          <svg
            width="66"
            height="20"
            viewBox="0 0 66 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_120_21)">
              <path
                d="M15.1218 0V19.6072H10.6409V11.8208H4.48091V19.6072H0V0H4.48091V7.50617H10.6409V0H15.1218Z"
                fill="white"
              />
              <path
                d="M27.8622 12.0734V19.6092H23.3813V12.0734L16.801 0H21.8975L25.6227 7.56341L29.3459 0H34.4425L27.8622 12.0734Z"
                fill="white"
              />
              <path
                d="M48.4436 16.4709H46.4843V19.6092H41.9481V16.4709H33.0435V12.3261L39.2864 0H44.1027L37.8579 12.3241H41.9461V8.12198H46.4823V12.3241H48.4416V16.469L48.4436 16.4709Z"
                fill="white"
              />
              <path
                d="M50.2628 13.2774V0H54.7437V12.8846C54.7437 14.3689 55.4441 15.6301 57.8237 15.6301C60.2032 15.6301 60.9037 14.3689 60.9037 12.8846V0H65.3846V13.2774C65.3846 17.4795 62.1369 20 57.8237 20C53.5105 20 50.2628 17.4795 50.2628 13.2774Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_21">
                <rect width="65.3846" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <div className="flex flex-row items-center space-x-[18px] pl-1">
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L1 8L8 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-[18px] text-white">{title}</span>
          </div>
        )}
      </div>
      <div className="mt-1.5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default MainNav;
