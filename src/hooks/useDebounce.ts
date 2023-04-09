import { useRef, useState } from 'react';

const useDebounce = (callback: Function, timeout: number): [Function, boolean] => {
	const timerId = useRef<any>();
	const [isDone, setIsDone] = useState(false);
	timeout = timeout || 0;
	return [
		(...args: any) => {
			if (timerId.current) {
				clearTimeout(timerId.current);
				timerId.current = null;
				setIsDone(true);
			}
			timerId.current = setTimeout(() => {
				setIsDone(false);
				callback(...args);
			}, timeout);
		},
		isDone,
	];
};

export default useDebounce;
