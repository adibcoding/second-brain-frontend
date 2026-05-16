import styles from "./actionSidebar.module.css";

interface ActionSidebarProps {
  children?: React.ReactNode;
}

export default function ActionSidebar({ children,  }: ActionSidebarProps) {
  return (
    <>
      <div className={styles.actionSidebar}>{children}</div>
    </>
  );
}
