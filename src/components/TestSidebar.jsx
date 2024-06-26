"use client";
import {
  Badge,
  Bell,
  Home,
  HomeIcon,
  LineChart,
  Package2,
  SquareGanttChart,
  Settings2,
  Users,
  History,
  CheckCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";
import { ScrollArea } from "./ui/scroll-area";
const links = [
  {
    label: "Home",
    link: "/test",
    icon: HomeIcon,
  },
  {
    label: "Project Management",
    link: "/test/project-management",
    icon: SquareGanttChart,
  },
  {
    label: "Settings",
    link: "/test/settings",
    icon: Settings2,
  },
  {
    label: "Profile",
    link: "/dashboard/profile",
    icon: Users,
  },
  {
    label: "Task List",
    link: "/test/tasks-list",
    icon: CheckCheck,
  },
  {
    label: "Analytics",
    link: "/test/analytics",
    icon: LineChart,
  },
 
];

const TestSidebar = () => {
  const pathName = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block py-3 ">
      <ScrollArea className="">
        <div className="flex h-full max-h-screen  flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {links.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex items-center gap-3 rounded-lg  py-1 text-muted-foreground transition-all"
                >
                  <SidebarButton
                    variant={pathName === item.link ? "destructive" : "ghost"}
                    icon={item.icon}
                    className="w-full"
                  >
                    {item.label}
                  </SidebarButton>
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4 mb-0">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestSidebar;
