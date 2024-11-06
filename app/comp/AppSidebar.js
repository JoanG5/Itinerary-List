"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Plus, ChevronDown, Menu } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// This would typically come from your authentication context or user state
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatarUrl: "https://github.com/shadcn.png", // Replace with actual user avatar URL
};

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            Location App
          </h2>
          <SidebarTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="group-data-[collapsible=icon]:rotate-180"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <TooltipProvider>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/"}
                    >
                      <Link href="/" className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        <span className="group-data-[collapsible=icon]:hidden">
                          Home
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="group-data-[collapsible=icon]:block hidden"
                  >
                    Home
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/submit"}
                    >
                      <Link href="/submit" className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        <span className="group-data-[collapsible=icon]:hidden">
                          Submit
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="group-data-[collapsible=icon]:block hidden"
                  >
                    Submit
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/locations"}
                    >
                      <Link href="/locations" className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span className="group-data-[collapsible=icon]:hidden">
                          All Locations
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="group-data-[collapsible=icon]:block hidden"
                  >
                    All Locations
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            </TooltipProvider>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-medium">{user.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
