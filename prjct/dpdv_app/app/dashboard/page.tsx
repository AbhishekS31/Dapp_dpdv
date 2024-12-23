"use client"; // Ensure this is at the top

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; // Assuming Button component exists
import Link from "next/link"; // Import Link from next.js
import NavigationMenuDemo from "@/components/navigation-menu-demo"; // Adjust the path accordingly
import { WalletConnect } from "@/components/walletconnect"; // Import the WalletConnect component

export default function Page() {
  return (
    <div className="dotted-background flex flex-col h-screen">
      {/* Header Section */}
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* Replaced Login button with Wallet Connect Button */}
              <WalletConnect /> {/* Use the WalletConnect component to connect MetaMask */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="fixed top-3 left-3">
        {/* Your main content goes here */}
        <div className="text-center">
          <NavigationMenuDemo />
        </div>
      </main>
    </div>
  );
}
