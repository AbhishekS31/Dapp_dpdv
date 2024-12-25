"use client";

import { useState } from "react";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; 
import NavigationMenuDemo from "@/components/navigation-menu-demo";
import { WalletConnect } from "@/components/walletconnect"; 
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"; 
import PacmanBackground from "@/components/PacmanBackground"; 
import ImageCard from "@/components/ui/image-card"; 

export default function Page() {
    const [account, setAccount] = useState<string | null>(null);
    const [files, setFiles] = useState<File[]>([]); // State to hold uploaded files
    const items = ['----Decentralized File Sharing Application----'];

    // Handle the account connection
    const handleConnect = (connectedAccount: string) => {
        setAccount(connectedAccount);
    };

    // Handle files dropped or selected
    const handleFileUpload = (uploadedFiles: File[]) => {
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    return (
        <div className="relative flex flex-col h-screen overflow-y-auto">
            {/* Background Component */}
            <PacmanBackground />

            {/* Header Section */}
            <header className="relative flex h-16 shrink-0 items-center z-20">
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
                <div style={{ position: 'absolute', top: '2px', left: '50%', transform: 'translateX(-50%)', zIndex: 4, width: '40%' }}>
                    <Marquee items={items} />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex flex-1 flex-col justify-start items-center mt-12 relative space-y-6 z-20">
                {account ? (
                    // If an account is connected, display the HoverCard with account details
                    <HoverCard>
                        <HoverCardTrigger>
                            <Button className="bg-blue-500 text-white px- py-4 shadow-lg border-2 border-black">
                                Account connected
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
                        handleFileUpload(Array.from(files)); // Convert FileList to array
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
                        if (files) {
                            handleFileUpload(Array.from(files)); // Convert FileList to array
                        }
                    }}
                />

                {/* Files Display Section */}
                {files.length > 0 && (
                    <div className="w-full mt-12">
                        <h3 className="text-xl font-semibold mb-4">Uploaded Files</h3>
                        <div className="flex flex-col items-start space-y-6 sticky top-24 left-10">
                            {files.map((file, index) => (
                                <div key={index} className="w-full max-w-xs">
                                    {/* Only show image preview using ImageCard */}
                                    {file.type.startsWith("image/") && (
                                        <ImageCard
                                            imageUrl={URL.createObjectURL(file)}
                                            caption={file.name}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
