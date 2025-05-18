
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { 
  BarChart3, Upload, Lightbulb, FileText, Settings, Sun, Moon, Menu, X
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: "Upload Data",
      path: "/upload",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      name: "Insights",
      path: "/insights",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile header */}
      <header className="md:hidden border-b p-4 flex items-center justify-between bg-background">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-insight-600" />
          <span className="font-bold text-xl">InsightFlow</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    active={location.pathname === item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex bg-sidebar flex-col border-r w-64 min-h-screen">
        <div className="p-6">
          <Link to="/dashboard" className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-insight-600" />
            <span className="font-bold text-xl">InsightFlow</span>
          </Link>
        </div>
        <nav className="px-3 py-6 flex-grow">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} active={location.pathname === item.path}>
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 border-t">
          <Button variant="outline" size="sm" onClick={toggleTheme} className="w-full gap-2">
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                Dark Mode
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow">
        <div className="h-full py-6 px-6 md:px-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, active, children, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground"
      )}
    >
      {children}
    </Link>
  );
};

export default Layout;
