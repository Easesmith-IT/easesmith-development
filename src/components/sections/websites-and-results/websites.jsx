"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export const Websites = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="space-y-6">
        <Image
          src="/images/websites/website1.png"
          alt="Website1"
          width={500}
          height={400}
          className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
        />
        {showMore && (
          <>
            <Image
              src="/images/websites/website2.png"
              alt="Website1"
              width={500}
              height={400}
              className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
            />
            <Image
              src="/images/websites/website3.png"
              alt="Website1"
              width={500}
              height={400}
              className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
            />
          </>
        )}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Button
          onClick={() => setShowMore(!showMore)}
          className="px-8 py-5.5 text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:border-(--color-easesmith) hover:text-(--color-easesmith)"
        >
          {showMore ? " Show less" : " Show more"}
        </Button>
      </div>
    </div>
  );
};
