import { useState } from "react";

enum TestValue {
  NOTATALL,
  NO,
  AVERAGE,
  YES,
  AGREE,
}

function MbtiSelect() {
  const [value, setValue] = useState<TestValue>(TestValue.AVERAGE);

  return (
    <div className="flex flex-row w-[310px] m-auto justify-between items-start pb-5">
      <div
        className="flex w-[43px] flex-col justify-center items-center"
        onClick={() => setValue(TestValue.NOTATALL)}
      >
        <svg
          className={`${
            value === TestValue.NOTATALL ? "bg-[#2E7BFF] rounded-full" : null
          }`}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="7.5" r="7" stroke="#767676" />
        </svg>
        <span className="mt-[10px] text-[14px] text-[#767676] text-center">
          전혀 아니다
        </span>
      </div>
      <div
        className="flex w-[43px] flex-col justify-center items-center"
        onClick={() => setValue(TestValue.NO)}
      >
        <svg
          className={`${
            value === TestValue.NO ? "bg-[#2E7BFF] rounded-full" : null
          }`}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="7.5" r="7" stroke="#767676" />
        </svg>
        <span className="mt-[10px] text-[14px] text-[#767676] text-center">
          아니다
        </span>
      </div>
      <div
        className="flex w-fit flex-col justify-center items-center"
        onClick={() => setValue(TestValue.AVERAGE)}
      >
        <svg
          className={`${
            value === TestValue.AVERAGE ? "bg-[#2E7BFF] rounded-full" : null
          }`}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="7.5" r="7" stroke="#767676" />
        </svg>
        <span className="mt-[10px] text-[14px] text-[#767676] text-center">
          보통이다
        </span>
      </div>
      <div
        className="flex w-[43px] flex-col justify-center items-center"
        onClick={() => setValue(TestValue.YES)}
      >
        <svg
          className={`${
            value === TestValue.YES ? "bg-[#2E7BFF] rounded-full" : null
          }`}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="7.5" r="7" stroke="#767676" />
        </svg>
        <span className="mt-[10px] text-[14px] text-[#767676] text-center">
          그렇다
        </span>
      </div>
      <div
        className="flex w-[43px] flex-col justify-center items-center"
        onClick={() => setValue(TestValue.AGREE)}
      >
        <svg
          className={`${
            value === TestValue.AGREE ? "bg-[#2E7BFF] rounded-full" : null
          }`}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="7.5" r="7" stroke="#767676" />
        </svg>
        <span className="mt-[10px] text-[14px] text-[#767676] text-center">
          매우 그렇다
        </span>
      </div>
    </div>
  );
}

export default MbtiSelect;
