import styles from './About.module.scss';

export type AboutProps = Record<string, never>;

export default function About(_props: AboutProps): React.ReactElement {
  return <section id="about" className={styles['about']} />;
}
