import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

export default function ConnectWithMail() {
  const id = useId();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm pt-12">
        <DialogHeader>
          <DialogTitle className="sm:text-center">
            Log in or sign up
          </DialogTitle>
          <DialogDescription className="sm:text-center">
            Choose your preferred authentication method.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="hi@yourcompany.com"
                type="email"
                required
              />
            </div>
          </div>
          <Button type="button" className="w-full">
            Sign up
          </Button>
        </form>

        <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
          <span className="text-muted-foreground text-xs">Or</span>
        </div>

        <div className="flex flex-col gap-2">
          <Button variant="outline">Continue with Wallet</Button>
        </div>

        <p className="text-muted-foreground text-center text-xs">
          By signing up you agree to our{" "}
          <a className="underline hover:no-underline" href="#">
            Terms
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
