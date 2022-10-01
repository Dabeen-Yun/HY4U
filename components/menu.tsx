import Image from "next/image";

interface mainProps {
  title: string;
  des: string;
  src: string;
}

function Menu({ title, des, src }: mainProps) {
  return (
    <>
      <div className="bg-white w-[170px] h-[170px] rounded-lg p-5 mt-[10px] sho">
        <div>
          <h2 className="text-[18px] font-bold">{title}</h2>
          <p className="text-[#767676] text-[14px]">{des}</p>
        </div>
        <div className="relative top-7 left-20">
          <Image
            src={src}
            alt="main images"
            layout="intrinsic"
            width={50}
            height={50}
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
