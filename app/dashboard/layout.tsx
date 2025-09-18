"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <IconBrandTabler className="h-5 w-5 shrink-0 text-white" />
    ),
  },
  {
    label: "Profile",
    href: "/profile",
    icon: (
      <IconUserBolt className="h-5 w-5 shrink-0 text-white" />
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (
      <IconSettings className="h-5 w-5 shrink-0 text-white" />
    ),
  },
  {
    label: "Logout",
    href: "/logout",
    icon: (
      <IconArrowLeft className="h-5 w-5 shrink-0 text-white" />
    ),
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(true);
  const { user } = useUser();

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-[#0a0a0a]">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.fullName || user?.firstName || "User",
                href: "#",
                icon: (
                  <img
                    src="/magnified.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <span className="font-medium whitespace-pre text-white">
        Magnified
      </span>
    </a>
  );
};

const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
