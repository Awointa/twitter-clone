import "./SidebarItem.css";

export const SidebarItem = ({ active, text, Icon }) => {
  return (
    <li className={`sidebarItem ${active && "SidebarItem--active"}`}>
      <Icon />
      <h2 className="itemText">{text}</h2>
    </li>
  );
};
