import { PropsWithChildren } from 'react';
import { message } from './Message.css';

export default function Message({ children }: PropsWithChildren) {
	return <p className={message}>{children}</p>;
}
