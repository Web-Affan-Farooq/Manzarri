import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProfileData = () => {
  return (
    <div className="bg-manzarri-skin/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-manzarri-reddish-brown text-manzarri-white text-2xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-manzarri-black mb-2">
              John Doe
            </h1>
            <p className="text-manzarri-black/70 mb-4">john.doe@email.com</p>
            <div className="flex items-center gap-4">
              <Badge className="bg-manzarri-faun text-manzarri-white">
                <Star className="w-3 h-3 mr-1" />
                Gold Member
              </Badge>
              <Badge
                variant="outline"
                className="border-manzarri-green text-manzarri-green"
              >
                Verified
              </Badge>
            </div>
          </div>
          <Link href="/profile/settings">
            <Button
              variant="outline"
              className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProfileData;
