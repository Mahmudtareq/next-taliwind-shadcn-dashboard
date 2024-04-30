import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TestSidebar from "@/components/TestSidebar";
import TestMobileSidebar from "@/components/TestMobileSidebar";
import DashBoardHeader from "@/components/DashBoardHeader";
import UserProfile from "@/components/UserProfile";
import ToggleMode from "@/components/ToggleMode";

const Dashboard = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <TestSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <TestMobileSidebar />
            </SheetContent>
          </Sheet>
          <DashBoardHeader />
          <ToggleMode />
          <UserProfile />
        </header>
        <main className="px-3 py-4">{children}</main>
      </div>
    </div>
  );
};
export default Dashboard;
