"use client";

/* _____ Hooks ... */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* _____ Types and schemas... */
import SignupSchema from "@/validations/SignupSchema";

/* _____ Libraries... */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import * as z from "zod";

/* _____ Components... */
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

type SignupFormData = z.infer<typeof SignupSchema>;

const Section_signup = () => {
  const router = useRouter();
  /* _____ For controlling button ... */
  const [disabled, setdisabled] = useState(false);
  /* _____ React hook form... */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });
  /* _____ Handle signup... */
  const Signup = async (data: SignupFormData) => {
    setdisabled(true);
    try {
      const response = await axios.post("/api/signup", data);
      toast.success(response.data.message);
      router.push(response.data.redirect);
    } catch (err) {
      console.log(err);
      toast.error("An error occured while creating account");
    }
    setdisabled(false);
  };
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
          <p className="text-manzarri-black/70 mt-2">
            Join our exclusive jewelry community
          </p>
        </div>

        <Card className="border-manzarri-black/10 shadow-xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-manzarri-black mb-2">
                Create Account
              </h1>
              <p className="text-manzarri-black/70">
                Start your journey with luxury jewelry
              </p>
            </div>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="text-manzarri-black">
                  Full Name
                </Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-5 h-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-12 border-manzarri-black/20 focus:border-manzarri-reddish-brown"
                    required
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-manzarri-black">
                  Email Address
                </Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 border-manzarri-black/20 focus:border-manzarri-reddish-brown"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <Label htmlFor="password" className="text-manzarri-black">
                  Password
                </Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pl-12 pr-12 border-manzarri-black/20 focus:border-manzarri-reddish-brown"
                    required
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
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
                <p className="text-xs text-manzarri-black/60 mt-2">
                  Must be at least 8 characters with numbers and special
                  characters
                </p>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1" />
                <Label
                  htmlFor="terms"
                  className="text-sm text-manzarri-black/70 leading-relaxed"
                >
                  I agree to the
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
                </Label>
              </div>

              {/* Newsletter Subscription */}
              <div className="flex items-start space-x-3">
                <Checkbox id="newsletter" defaultChecked />
                <Label
                  htmlFor="newsletter"
                  className="text-sm text-manzarri-black/70 leading-relaxed"
                >
                  Subscribe to our newsletter for exclusive offers and new
                  collection updates
                </Label>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                onClick={handleSubmit(Signup)}
                className={`w-full hover:bg-manzarri-reddish-brown/90 ${disabled ? "hover:bg-manzarri-reddish-brown/90 cursor-not-allowed" : "bg-manzarri-reddish-brown cursor-pointer"} text-manzarri-white py-6`}
              >
                Create Account
              </Button>

              {/* Divider */}
              <div className="relative">
                <Separator className="bg-manzarri-black/10" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-manzarri-white px-4 text-sm text-manzarri-black/60">
                  Or sign up with
                </span>
              </div>

              {/* Social Sign Up */}
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
                  className="border-manzarri-black/20 text-manzarri-black hover:bg-manzarri-skin/20"
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

            {/* Sign In Link */}
            <div className="text-center mt-8 pt-6 border-t border-manzarri-black/10">
              <p className="text-manzarri-black/70">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-manzarri-reddish-brown hover:text-manzarri-reddish-brown/80 transition-colors font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="mt-6 border-manzarri-black/10 bg-gradient-to-r from-manzarri-skin/10 to-manzarri-faun/10">
          <div className="p-6">
            <h3 className="font-semibold text-manzarri-black mb-4 text-center">
              Member Benefits
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-manzarri-reddish-brown rounded-full"></div>
                <span className="text-sm text-manzarri-black/80">
                  Exclusive access to new collections
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-manzarri-reddish-brown rounded-full"></div>
                <span className="text-sm text-manzarri-black/80">
                  Free shipping on orders over $500
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-manzarri-reddish-brown rounded-full"></div>
                <span className="text-sm text-manzarri-black/80">
                  Personalized jewelry recommendations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-manzarri-reddish-brown rounded-full"></div>
                <span className="text-sm text-manzarri-black/80">
                  Priority customer support
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Section_signup;
