"use client";

import { useState } from "react"; // Import useState for toggling between login and sign up
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => setIsLogin((prev) => !prev); // Toggle between forms

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{isLogin ? "Login" : "Sign Up"}</CardTitle>
          <CardDescription>
            {isLogin
              ? "Enter your email and password to log in."
              : "Enter your details to create a new account."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {isLogin && (
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <Input id="password" type="password" required />
              </div>

              {!isLogin && (
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                  </div>
                  <Input id="confirmPassword" type="password" required />
                </div>
              )}

              <Button type="submit" className="w-full">
                {isLogin ? "Login" : "Sign Up"}
              </Button>

              {!isLogin && (
                <Button variant="neutral" className="w-full">
                  Sign Up with Google
                </Button>
              )}
            </div>

            <div className="mt-4 text-center text-sm">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="underline underline-offset-4"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="underline underline-offset-4"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
