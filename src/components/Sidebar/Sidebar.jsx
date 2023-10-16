import TwitterIcon from "@mui/icons-material/Twitter";
import { SidebarItems } from "./SidebarItems/SidebarItems";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <TwitterIcon />
      <nav>
        <SidebarItems />
      </nav>
    </div>
  );
};
