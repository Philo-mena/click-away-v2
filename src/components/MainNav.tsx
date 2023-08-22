// "use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";







export function NavigationMenuDemo({isLoggedIn}:{isLoggedIn: boolean}) {
  return (
    <nav className="h-[60px] flex justify-between px-6 items-center border-b">
      <div>
        <h1>click-away</h1>
      </div>
      <div className="flex justify-between items-center max-w-[450px] w-full">
        <div className="flex gap-8">
          <a href="#" className={buttonVariants({ variant: "link" })}>
            About
          </a>
          <a href="#" className={buttonVariants({ variant: "link" })}>
            Contact
          </a>
        </div>
        {isLoggedIn ? (
          <div className="flex gap-8 items-center">
            <AvatarDemo />
            <Button className="h-8">Logout</Button>
          </div>
        ) : (
          <div className="flex gap-8 items-center">
            <a href="#" className={buttonVariants({ variant: "ghost" })}>
              Login
            </a>
            <Button className="h-8">Sign up</Button>
          </div>
        )}
      </div>
    </nav>
  );
}


 function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
