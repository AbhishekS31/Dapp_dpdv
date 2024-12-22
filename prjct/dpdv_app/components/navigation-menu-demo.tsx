'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'How It Works',
    href: '#',
    description:
      'Files are uploaded to the IPFS network, where they are broken into smaller chunks and distributed across multiple nodes.',
  },
  {
    title: 'Features',
    href: '#',
    description:
      'Decentralization, User-Control, Security and Cost-Efficiency',
  },
  {
    title: 'Benefits',
    href: '#',
    description:
      'Enhanced Resilience, Improved Privacy, Scalability, and Censorship Resisitance',
  },
  {
    title: 'Community',
    href: '#',
    description: 'Join our community to stay updated on developments and share your feedback!',
  },
  {
    title: 'Wallet',
    href: '#',
    description:
      'Crypto wallets are designed to store your private key, keeping your crypto accessible at all times.',
  },
  {
    title: 'Contact',
    href: '#',
    description:
      'For further inquiries or support, please reach out to us at [email@example.com].',
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="z-[5] m750:max-w-[300px]">
      <NavigationMenuList className="m750:max-w-[300px]">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
            <span className="m750:hidden">Getting started</span>
            <span className="hidden m750:inline">Home</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-6 lg:grid-cols-[.75fr_1fr] m750:w-[300px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-heading">
                      DPDV_Dapp
                    </div>
                    <p className="text-sm font-base leading-tight">
                      Decentralized file-sharing application leverages IPFS for secure and efficient file storage and sharing.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
              This platform empowers users to manage their files without relying on centralized servers.
              </ListItem>
              <ListItem
                href="#"
                title="Installation"
              >
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="#"
                title="Metamask"
              >
                MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://docs.web3js.org/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="m750:max-w-[80px] m750:text-xs">
                Documentation
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent block text-text select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder',
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'