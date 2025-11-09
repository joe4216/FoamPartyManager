import OwnerSidebar from '../OwnerSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function OwnerSidebarExample() {
  const style = {
    "--sidebar-width": "16rem",
  };
  
  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <OwnerSidebar />
        <div className="flex-1 p-8">
          <p className="text-muted-foreground">Main content area</p>
        </div>
      </div>
    </SidebarProvider>
  )
}
