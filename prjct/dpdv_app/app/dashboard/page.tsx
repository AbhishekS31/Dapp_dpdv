"use client"; // Ensure this is at the top

import { useState } from "react";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; // Assuming Button component exists
import NavigationMenuDemo from "@/components/navigation-menu-demo"; // Adjust the path accordingly
import { WalletConnect } from "@/components/walletconnect"; // Import the WalletConnect component
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"; // Your HoverCard components

export default function Page() {
  const [account, setAccount] = useState<string | null>(null);

  // Handle the account connection
  const handleConnect = (connectedAccount: string) => {
    setAccount(connectedAccount);
  };

  return (
    <div className="dotted-background flex flex-col h-screen">
      {/* Header Section */}
      <header className="relative flex h-16 shrink-0 items-center">
        <div className="absolute top-4 left-4">
          {/* Navigation Menu in Top Left Corner */}
          <NavigationMenuDemo />
        </div>
        <div className="flex items-center gap-2 px-4 ml-auto">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {/* Connect Wallet Button */}
              <WalletConnect onConnect={handleConnect} />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Main Content Area */}
        <main className="flex flex-1 flex-col justify-start items-center mt-12 relative space-y-6">
          {account ? (
            // If an account is connected, display the HoverCard with account details
            <HoverCard>
              <HoverCardTrigger>
                <Button className="bg-blue-500 text-white px-6 py-3 shadow-lg border-2 border-black">
                  {account.slice(0, 6)}...
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="border-2 border-black bg-white rounded-lg shadow-xl p-6">
                <div className="p-4 text-left">
                  <h4 className="text-2xl font-bold mb-4">Account Details</h4>
                  <p className="text-lg font-semibold">
                    <strong>Account Address:</strong> {account}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ) : (
            // If no account is connected, display a message and a placeholder area
            <div className="border-2 border-black bg-white rounded-lg shadow-xl p-6 text-center">
              <p className="text-lg font-bold">No account connected</p>
              <p className="text-sm text-gray-400 mt-2">
                Account details will appear here when connected.
              </p>
            </div>
          )}

          {/* Drop Box Section */}
          <div
            className="w-full max-w-md border-2 border-dashed border-black bg-white rounded-lg shadow-md p-24 flex flex-col justify-center items-center cursor-pointer"
            onDrop={(e) => {
              e.preventDefault();
              const files = e.dataTransfer.files;
              console.log("Files dropped:", files);
              // Handle the dropped files here
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className="text-lg font-semibold text-gray-700">
              Drag & Drop files here or click below to upload
            </p>
          </div>

          {/* Manual Upload Button */}
          <Button
            className="bg-yellow-500 text-black font-bold px-6 py-3 shadow-lg border-2 border-black"
            onClick={() => {
              const fileInput = document.getElementById("fileInput") as HTMLInputElement;
              fileInput?.click();
            }}
          >
            Upload Files Manually
          </Button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              console.log("Files selected:", files);
              // Handle the selected files here
            }}
          />
        </main>
    </div>
  );
}
