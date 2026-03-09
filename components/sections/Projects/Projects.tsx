import styles from './Projects.module.scss';

export type ProjectsProps = Record<string, never>;

export default function Projects(_props: ProjectsProps): React.ReactElement {
  return <section id="projects" className={styles['projects']} />;
}
