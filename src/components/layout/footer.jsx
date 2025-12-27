import Image from "next/image";
import { Button } from "../ui/button";
import { Instagram, InstagramIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-14 px-5">
      <Image
        src="/images/logo-black.svg"
        alt="Logo"
        width={300}
        height={200}
        className="mx-auto w-52 h-24 md:w-72 md:h-48"
      />

      <div className="flex justify-center items-center gap-5 mt-5">
        <Image src="/images/insta.svg" alt="Insta" width={30} height={30} />
        <Image src="/images/twitter.svg" alt="Twitter" width={30} height={30} />
        <Image src="/images/fb.svg" alt="FB" width={30} height={30} />
      </div>

      <div className="flex justify-center items-center mt-6">
        <Button className="px-10 md:px-16 py-5 md:py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:border-(--color-easesmith) hover:bg-white hover:text-(--color-easesmith)">
          Let&apos;s Talk
        </Button>
      </div>
    </footer>
  );
};
