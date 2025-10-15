"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const InviteSchema = z
  .object({
    key: z
      .string({ message: "Invalid string" })
      .min(6, "Enter 6 characters code")
      .max(6, "Enter 6 characters code"),
  })
  .strict();

const AcceptInvite = () => {
  const {
    // handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(InviteSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-manzarri-skin/20 to-manzarri-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-manzarri-reddish-brown rounded-full flex items-center justify-center">
              <span className="text-manzarri-white font-bold text-xl">M</span>
            </div>
            <span className="text-3xl font-bold text-manzarri-black">
              Manzarri
            </span>
          </Link>
          <p className="text-manzarri-black/70 mt-2">Welcome back to luxury</p>
        </div>

        <Card className="border-manzarri-black/10 shadow-xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-manzarri-black mb-2">
                Sign In
              </h1>
              <p className="text-manzarri-black/70">
                Enter your credentials to get onboard
              </p>
            </div>

            <form className="space-y-6">
              {/* Invitee key */}
              <div>
                <Label htmlFor="password" className="text-manzarri-black">
                  Enter your key
                </Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-12 pr-12 border-manzarri-black/20 focus:border-manzarri-reddish-brown"
                    required
                    {...register("key")}
                  />
                  {errors.key && (
                    <p className="text-red-500 text-sm">{errors.key.message}</p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-manzarri-black/60 hover:text-manzarri-reddish-brown"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-manzarri-black/70"
                  >
                    Remember me
                  </Label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white py-6"
                // onClick={handleSubmit(Login)}
              >
                {isSubmitting ? "Please wait ..." : "Sign in"}
              </Button>

              {/* Divider */}
              <div className="relative">
                <Separator className="bg-manzarri-black/10" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-manzarri-white px-4 text-sm text-manzarri-black/60">
                  Or continue with
                </span>
              </div>

              {/* Social Sign In */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-manzarri-black/20 text-manzarri-black hover:bg-manzarri-skin/20"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSubmitting}
                  className={`border-manzarri-black/20 text-manzarri-black hover:bg-manzarri-skin/20 ${isSubmitting ? "bg-manzarri-skin/20 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8 pt-6 border-t border-manzarri-black/10">
              <p className="text-manzarri-black/70">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80 transition-colors font-medium"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-manzarri-black/60">
            By signing in, you agree to our
            <Link
              href="/terms"
              className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80"
            >
              Terms of Service
            </Link>
            and
            <Link
              href="/privacy"
              className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AcceptInvite;
