"use client";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Lock,
  Bell,
  CreditCard,
  Truck,
  Shield,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {AccountActions} from "./AccountActions";

export default function SettingsPage() {
  return (
   
      <main className="flex min-h-screen w-full">
 <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/profile">
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-black hover:text-manzarri-reddish-brown"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-manzarri-black">
            Account Settings
          </h1>
          <p className="text-manzarri-black/70">
            Manage your account preferences and security
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card className="border-manzarri-black/10 sticky top-8">
              <div className="p-6">
                <h3 className="font-semibold text-manzarri-black mb-4">
                  Settings
                </h3>
                <nav className="space-y-2">
                  <a
                    href="#profile"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-reddish-brown bg-manzarri-reddish-brown/10"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="#security"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-black/70 hover:bg-manzarri-skin/20 transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    Security
                  </a>
                  <a
                    href="#notifications"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-black/70 hover:bg-manzarri-skin/20 transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                    Notifications
                  </a>
                  <a
                    href="#payment"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-black/70 hover:bg-manzarri-skin/20 transition-colors"
                  >
                    <CreditCard className="w-4 h-4" />
                    Payment & Billing
                  </a>
                  <a
                    href="#shipping"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-black/70 hover:bg-manzarri-skin/20 transition-colors"
                  >
                    <Truck className="w-4 h-4" />
                    Shipping
                  </a>
                  <a
                    href="#privacy"
                    className="flex items-center gap-3 p-2 rounded-lg text-manzarri-black/70 hover:bg-manzarri-skin/20 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy
                  </a>
                </nav>
              </div>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Profile Settings */}
            <Card id="profile" className="border-manzarri-black/10">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-manzarri-black mb-6">
                  Profile Information
                </h2>

                <div className="flex items-start gap-6 mb-8">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="bg-manzarri-reddish-brown text-manzarri-white text-xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-manzarri-black/20 mb-2"
                    >
                      Change Photo
                    </Button>
                    <p className="text-sm text-manzarri-black/60">
                      JPG, GIF or PNG. Max size of 800KB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      className="border-manzarri-black/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className="border-manzarri-black/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@email.com"
                      className="border-manzarri-black/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="border-manzarri-black/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthday">Date of Birth</Label>
                    <Input
                      id="birthday"
                      type="date"
                      defaultValue="1990-01-01"
                      className="border-manzarri-black/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select defaultValue="prefer-not-to-say">
                      <SelectTrigger className="border-manzarri-black/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    className="border-manzarri-black/20"
                    rows={3}
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card id="security" className="border-manzarri-black/10">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-manzarri-black mb-6">
                  Security
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type="password"
                        className="border-manzarri-black/20 pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type="password"
                          className="border-manzarri-black/20 pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">
                        Confirm New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type="password"
                          className="border-manzarri-black/20 pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                      Update Password
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card id="notifications" className="border-manzarri-black/10">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-manzarri-black mb-6">
                  Notification Preferences
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-manzarri-black">
                        Order Updates
                      </h4>
                      <p className="text-sm text-manzarri-black/70">
                        Get notified about your order status
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-manzarri-black">
                        Marketing & Promotions
                      </h4>
                      <p className="text-sm text-manzarri-black/70">
                        Receive emails about sales and new products
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-manzarri-black">
                        Wishlist Notifications
                      </h4>
                      <p className="text-sm text-manzarri-black/70">
                        Get notified when wishlist items go on sale
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-manzarri-black">
                        SMS Notifications
                      </h4>
                      <p className="text-sm text-manzarri-black/70">
                        Receive text messages for important updates
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-manzarri-black">
                        Push Notifications
                      </h4>
                      <p className="text-sm text-manzarri-black/70">
                        Get browser notifications for real-time updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>
            {/* Account Actions */}
            <AccountActions />
          </div>
        </div>
      </div>
    </div>    </main>
  );
}
