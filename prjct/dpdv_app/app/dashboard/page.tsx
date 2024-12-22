"use client"; // Ensure this is at the top

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link from next.js
import NavigationMenuDemo from "@/components/navigation-menu-demo"; // Adjust the path accordingly

export default function Page() {
  return (
    <div className="dotted-background flex flex-col h-screen">
      {/* Header Section */}
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* Wrap Button with Link to navigate to the Login page */}
              <Link href="/login" passHref>
                <Button className="fixed top-4 right-8 px-4 py-4">
                  Login
                </Button>
              </Link>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="fixed top-1 left-8 px-1 py-2">
        
          {/* Your main content goes here */}
      
          {/* Navigation Menu Demo Section */}
          <NavigationMenuDemo />
        
      </main>
    </div>
  );
}
