import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const AccountActions = () => {
  return (
    <Card className="border-manzarri-black/10 border-red-200 bg-red-50/20">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-manzarri-black mb-4">
          Danger Zone
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-manzarri-black">
                Deactivate Account
              </h4>
              <p className="text-sm text-manzarri-black/70">
                Temporarily disable your account
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Deactivate
            </Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-manzarri-black">
                Delete Account
              </h4>
              <p className="text-sm text-manzarri-black/70">
                Permanently delete your account and all data
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};