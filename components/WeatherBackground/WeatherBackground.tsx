import styles from './WeatherBackground.module.scss';

export type WeatherBackgroundProps = {
  weatherState: 'clear' | 'cloudy' | 'rain' | 'storm' | 'snow';
};

export default function WeatherBackground(_props: WeatherBackgroundProps): React.ReactElement {
  return <div aria-hidden className={styles['weatherBackground']} />;
}
