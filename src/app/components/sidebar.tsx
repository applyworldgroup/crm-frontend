"use client";

import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  Book,
  File,
  Inbox,
  MessagesSquare,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { NavItems } from "./nav-items";
import Image from "next/image";

export function Sidebar() {
  return (
    <div className="h-full max-h-[800px]">
      <div>
        <div className="flex gap-2 p-2 px-4 items-center">
          <Image
            width={50}
            height={50}
            src={"/icons8-literature-50.png"}
            alt="Logo"
          />
          <span className="font-bold text-lg"> HAMRO KHATA</span>
        </div>
        <Separator />
        <NavItems
          links={[
            {
              title: "Home",
              label: "128",
              icon: Inbox,
              variant: "default",
              url: "/dashboard",
            },
            {
              title: "Appointments",
              label: "9",
              icon: Book,
              variant: "ghost",
              url: "/dashboard/appointment",
            },
            {
              title: "Visitors",
              label: "9",
              icon: File,
              variant: "ghost",
              url: "/dashboard/visitors",
            },
            {
              title: "Calender",
              label: "",
              icon: Send,
              variant: "ghost",
              url: "/dashboard/calender",
            },
            {
              title: "Team",
              label: "23",
              icon: ArchiveX,
              variant: "ghost",
              url: "/dashboard/team",
            },
            {
              title: "Customers",
              label: "",
              icon: Trash2,
              variant: "ghost",
              url: "/dashboard/customers",
            },
            {
              title: "Visa Applications",
              label: "",
              icon: Archive,
              variant: "ghost",
              url: "/dashboard/visa-applications",
            },
            {
              title: "Job Ready Program",
              label: "",
              icon: Archive,
              variant: "ghost",
              url: "/dashboard/job-ready-program",
            },
            {
              title: "Skills Assesment",
              label: "",
              icon: Archive,
              variant: "ghost",
              url: "/dashboard/skills-assesment",
            },
          ]}
        />
        <Separator />
        <NavItems
          links={[
            {
              title: "Settings",
              label: "972",
              icon: Settings,
              variant: "ghost",
              url: "/dashboard",
            },
            {
              title: "Updates",
              label: "342",
              icon: AlertCircle,
              variant: "ghost",
              url: "/dashboard",
            },
            {
              title: "Forums",
              label: "128",
              icon: MessagesSquare,
              variant: "ghost",
              url: "/dashboard",
            },
            {
              title: "Shopping",
              label: "8",
              icon: ShoppingCart,
              variant: "ghost",
              url: "/dashboard",
            },
            {
              title: "Promotions",
              label: "21",
              icon: Archive,
              variant: "ghost",
              url: "/dashboard",
            },
          ]}
        />
      </div>
    </div>
  );
}
