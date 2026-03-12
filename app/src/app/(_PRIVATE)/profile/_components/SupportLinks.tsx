import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Links = () => {
  return (
    <Card className="border-manzarri-black/10">
      <div className="p-6">
        <h3 className="font-semibold text-manzarri-black mb-4">Need Help?</h3>
        <div className="space-y-3">
          <Button
            variant="ghost"
            className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown"
          >
            Contact Support
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown"
          >
            Track Order
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-manzarri-black/70 hover:text-manzarri-reddish-brown"
          >
            Return Policy
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Links;
