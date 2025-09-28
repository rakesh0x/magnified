"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

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
                label: "",
                href: "#",
                icon: (
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "R"}
                    </div>
                    {open && (
                      <div className="flex flex-col">
                        <span className="text-white text-sm">
                          {user?.fullName || user?.firstName || "User"}
                        </span>
                        <span className="text-gray-400 text-xs">
                          Magnified
                        </span>
                      </div>
                    )}
                  </div>
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
