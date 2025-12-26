import Image from "next/image";

export const FreeBonuses = () => {
  return (
    <div className="bg-(--color-easesmith) px-5 py-12">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-(--color-para) uppercase font-black text-6xl text-center">
          Free bonuses
        </h2>
        <Image
          src="/images/heading-line.png"
          alt="heading-line"
          width={500}
          height={10}
          className="mx-auto"
        />

        <div className="flex justify-center items-center mt-10">
          <div className="bg-[#F9FDD5] text-(--color-easesmith) rounded-full px-10 py-4 w-auto mx-auto inline-flex justify-center gap-1.5 font-black text-4xl">
            WORTH ₹1,48,600
          </div>
        </div>

        <div className=" flex justify-between items-center gap-5 mt-10">
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-(--color-para)">
              ₹52,000 Value
            </h4>
            <p className="text-(--color-para) font-normal text-lg text-center mt-3">
              5-Minute Plug-n-Play CRO Boosters
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-(--color-para)">
              ₹51,200 Value
            </h4>
            <p className="text-(--color-para) font-normal text-lg text-center mt-3">
              Instant High-Converting Copy Generator
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-(--color-para)">
              ₹45,400 Value
            </h4>
            <p className="text-(--color-para) font-normal text-lg text-center mt-3">
              Ready-to-Launch Paid Ads Strategy for High ROAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
