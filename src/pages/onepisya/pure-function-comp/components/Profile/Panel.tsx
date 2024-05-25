import { useState } from 'react';
import styles from './styles.less';

export default function Panel({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <section className={styles.panel}>
      <button onClick={() => setOpen(!open)}>{open ? 'Collapse' : 'Expand'}</button>
      {open && children}
    </section>
  );
}
