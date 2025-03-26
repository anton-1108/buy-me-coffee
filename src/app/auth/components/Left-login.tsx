import { Coffee } from "lucide-react";

export default function Left() {
  return (
    <div className="bg-[#FBBF24] w-1/2 flex h-full justify-center items-center relative">
      <div className="flex gap-[8px] absolute top-[32px] left-[80px]  text-[#09090B] ">
        <Coffee />
        <p className="font-bold text-[16px]">Buy me Coffee</p>
      </div>
      <div className="">
        <div className="gap-[40px] items-center justify-center flex flex-col">
          <img src="/illustration.svg" alt="" />
          <div className="gap-[12px] flex flex-col">
            <p className="font-bold text-[24px] text-[#09090B] w-[455px] text-center">
              Fund your creative work{" "}
            </p>
            <p className="text-[16px] text-[#09090B] w-[455px]">
              Accept support. Start a membership. Setup a shop. It’s easier than
              you think.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
