import { Button } from "@/components/ui/button";
import { Guarantee } from "./guarantee";
import guarantees from "@/data/guarantees.json";

export const Guarantees = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl text-(--color-para) text-center font-bold">
        Here’s exactly what we do to{" "}
        <span className="text-(--color-easesmith) underline font-black">
          Guarantee
        </span>{" "}
        <br /> better conversions so that you can <br />
        <span className="text-(--color-easesmith) italic font-black text-5xl">
          Make More Money
        </span>
      </h2>
      <div className="flex gap-5 mt-10">
        {guarantees.map((reason, index) => (
          <Guarantee
            key={index}
            src={reason.src}
            alt={`Reason${index + 1}`}
            title={reason.title}
            desc={reason.desc}
          />
        ))}
      </div>
    </div>
  );
};
