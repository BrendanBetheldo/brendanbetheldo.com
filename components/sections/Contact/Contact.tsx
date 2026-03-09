import styles from './Contact.module.scss';

export type ContactProps = Record<string, never>;

export default function Contact(_props: ContactProps): React.ReactElement {
  return <section id="contact" className={styles['contact']} />;
}
