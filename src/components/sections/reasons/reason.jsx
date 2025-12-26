import Image from "next/image";

export const Reason = ({ src, title, desc, alt }) => {
  return (
    <div className="">
      <Image src={src} alt={alt} width={150} height={150} />
      <h3 className="font-bold text-2xl text-(--color-para) mt-4">{title}</h3>
      <p className="font-normal text-(--color-para)">{desc}</p>
    </div>
  );
};
