import styles from "./button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  margin?: string;
  onClick?: () => void;
};

export default function Button({ children, onClick, margin }: ButtonProps) {
  return (
    <>
      <button className={styles.actionButton} onClick={onClick} style={{
        margin
      }}>
        {children}
      </button>
    </>
  );
}

