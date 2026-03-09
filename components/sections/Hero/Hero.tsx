import styles from './Hero.module.scss';

export type HeroProps = Record<string, never>;

export default function Hero(_props: HeroProps): React.ReactElement {
  return <section id="hero" className={styles['hero']} />;
}
