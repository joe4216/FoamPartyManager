import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import OwnerSidebar from "@/components/OwnerSidebar";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import OwnerDashboard from "@/pages/OwnerDashboard";
import CalendarView from "@/pages/CalendarView";
import KanbanView from "@/pages/KanbanView";

function OwnerLayout({ children }: { children: React.ReactNode }) {
  const style = {
    "--sidebar-width": "16rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <OwnerSidebar />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/owner/dashboard">
        <OwnerLayout>
          <OwnerDashboard />
        </OwnerLayout>
      </Route>
      <Route path="/owner/calendar">
        <OwnerLayout>
          <CalendarView />
        </OwnerLayout>
      </Route>
      <Route path="/owner/kanban">
        <OwnerLayout>
          <KanbanView />
        </OwnerLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
