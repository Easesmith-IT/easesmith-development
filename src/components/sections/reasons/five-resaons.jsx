import { Button } from "@/components/ui/button";
import { Reason } from "./reason";
import reasons from "@/data/reasons.json";

export const FiveReasons = () => {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <h2 className="text-xl lg:text-3xl text-(--color-para) text-center font-bold px-5">
        These are the{" "}
        <span className="text-(--color-easesmith) underline font-black text-2xl md:text-4xl lg:text-5xl">
          5 Reasons
        </span>{" "}
        why F&B brands that already make 10L+ a month still can’t
        turn their visitors into paying customers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap gap-5 mt-8 px-5">
        {reasons.map((reason, index) => (
          <Reason
            key={index}
            src={reason.src}
            alt={`Reason${index + 1}`}
            title={reason.title}
            desc={reason.desc}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6">
        <Button className="px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:text-(--color-easesmith)">
          Increase Your Conversions Today
        </Button>
      </div>
    </div>
  );
};
