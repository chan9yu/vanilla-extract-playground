import { PropsWithChildren } from 'react';
import * as styles from './Heading.css';

export default function Heading({ children }: PropsWithChildren) {
	return <h1 className={styles.root}>{children}</h1>;
}
