import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="md:sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center gap-5 px-4 py-5">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Easesmith"
            width={64}
            height={56}
            className="h-14 w-16"
          />
        </Link>
        <Button className="px-7 py-4.5 md:px-16 md:py-5.5 text-xs md:text-base font-semibold rounded-sm border-2 border-transparent hover:border-(--color-easesmith) hover:bg-white hover:text-(--color-easesmith)">
          Book A Call
        </Button>
      </div>
    </header>
  );
};
