import Image from "next/image";

export const Guarantee = ({ src, title, desc, alt }) => {
  return (
    <div className="">
      <Image src={src} alt={alt} width={50} height={50} />
      <h3 className="font-bold text-base text-(--color-para) mt-4">{title}</h3>
      <p className="font-normal text-(--color-para)">{desc}</p>
    </div>
  );
};
