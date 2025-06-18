import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { Search, BarChart2, Award } from "lucide-react";
import { useCallback } from "react";

const navItems = [
  { name: "Score Lookup", path: "/lookup", icon: <Search /> },
  { name: "Statistics", path: "/statistics", icon: <BarChart2 /> },
  { name: "Top 10 Block A", path: "/topblockapage", icon: <Award /> },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <aside
      className={`fixed top-0 left-0 mt-16 lg:mt-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-50
        ${isExpanded || isMobileOpen || isHovered ? "w-64" : "w-20"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo section */}
      <div className="py-6 flex justify-center items-center gap-2">
        {(isExpanded || isHovered || isMobileOpen) && (
          <span className="text-lg font-semibold">G-Score</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors
                  ${
                    isActive(item.path)
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10"
                      : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                  ${!isExpanded && !isHovered ? "justify-center" : ""}`}
              >
                <span className="w-6 h-6 flex-shrink-0">{item.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
