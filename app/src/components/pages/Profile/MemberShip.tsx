import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const MemberShip = () => {
  return (
    <Card className="border-manzarri-black/10 bg-gradient-to-br from-manzarri-faun/10 to-manzarri-reddish-brown/10">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Star className="w-6 h-6 text-manzarri-faun mr-2" />
          <h3 className="font-semibold text-manzarri-black">Gold Member</h3>
        </div>
        <p className="text-sm text-manzarri-black/70 mb-4">
          Enjoy exclusive benefits including free shipping, early access to
          sales, and personalized recommendations.
        </p>
        <div className="space-y-2 text-xs text-manzarri-black/60">
          <div className="flex justify-between">
            <span>Progress to Platinum</span>
            <span>$1,200 / $5,000</span>
          </div>
          <div className="w-full bg-manzarri-skin/50 rounded-full h-2">
            <div
              className="bg-manzarri-faun h-2 rounded-full"
              style={{ width: "24%" }}
            ></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MemberShip;
