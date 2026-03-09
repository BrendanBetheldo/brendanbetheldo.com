import styles from './Nav.module.scss';

export type NavProps = Record<string, never>;

export default function Nav(_props: NavProps): React.ReactElement {
  return (
    <nav className={styles['nav']} aria-label="Main">
      <div className={styles['navInner']} />
    </nav>
  );
}
