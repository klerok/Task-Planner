import styles from "../styles/index.module.css";

export const DashboardIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={styles.logoIcon}
    >
      <path
        d="M10 3H3V10H10V3Z"
        stroke="#707070"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 3H14V10H21V3Z"
        stroke="#707070"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 14H14V21H21V14Z"
        stroke="#707070"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14H3V21H10V14Z"
        stroke="#707070"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
