"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId, useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

export function ConnectWithMail() {
  const id = useId();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = (
    <>
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
    </>
  );

  if (isDesktop) {
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
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Connect</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Log in or sign up</DrawerTitle>
          <DrawerDescription>
            Choose your preferred authentication method.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 space-y-5">
          {content}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
