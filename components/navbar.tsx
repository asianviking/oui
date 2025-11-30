import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto items-center flex justify-between border py-4 px-6">
        <div className="font-bold">OUI</div>
        <div className="flex gap-2">
          <Button variant="ghost">
            Github <ExternalLink className="w-3 h-3" />
          </Button>
          <Button variant="ghost">
            Follow me <ExternalLink className="w-2 h-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
