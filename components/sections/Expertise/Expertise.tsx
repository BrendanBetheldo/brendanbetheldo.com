import styles from './Expertise.module.scss';

export type ExpertiseProps = Record<string, never>;

export default function Expertise(_props: ExpertiseProps): React.ReactElement {
  return <section id="expertise" className={styles['expertise']} />;
}
