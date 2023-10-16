import { SidebarItem } from "../SidebarItem/SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

import styles from "./SidebarItems.module.css";

export const SidebarItems = () => {
  return (
    <ul className={styles.SidebarItems}>
      <SidebarItem active text="Home" Icon={HomeIcon} />
      <SidebarItem text="Explore" Icon={SearchIcon} />
      <SidebarItem text="Notification" Icon={NotificationsNoneIcon} />
      <SidebarItem text="Messages" Icon={MailOutlineIcon} />
      <SidebarItem text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarItem text="Lists" Icon={ListAltIcon} />
      <SidebarItem text="Profile" Icon={PermIdentityIcon} />
      <SidebarItem text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className={styles.sidebar__button}>
        Tweet
      </Button>
    </ul>
  );
};
