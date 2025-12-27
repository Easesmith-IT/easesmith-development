import { MoveUpRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export const CTAButton = () => {
  return (
    <Button className="w-full block md:hidden py-6 font-semibold rounded-none fixed bottom-0 left-0 right-0">
      <span>Increase Your Conversions Today</span>
      <MoveUpRightIcon className="size-5" />
    </Button>
  );
};
