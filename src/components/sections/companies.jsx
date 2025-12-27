import Image from "next/image";

export const Companies = () => {
  return (
    <div className="py-10 md:py-20 container mx-auto px-6">
      <h2 className="mt-4 text-lg md:text-3xl font-bold text-(--color-para)">
        We Are{" "}
        <span className="text-(--color-easesmith) underline italic font-black">
          INDIA’S #1
        </span>{" "}
        F&B Growth Agency
      </h2>
      <div className="flex justify-between flex-wrap gap-5 mt-6">
        <Image
          src="/images/logos/1.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/2.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/3.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/4.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/5.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/1.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/2.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/3.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
        <Image
          src="/images/logos/4.png"
          alt="Logo"
          width={50}
          height={50}
          className="size-24.5"
        />
      </div>
    </div>
  );
};
