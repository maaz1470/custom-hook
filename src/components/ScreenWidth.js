import useCustomWidth from './Hooks/useCustomWidth';

export default function ScreenWidth() {
	
	const onScreenWidth = useCustomWidth(300);
	console.log(onScreenWidth)

	return (
		<>
			<p>Your browser on {onScreenWidth ? 'Small' : 'Large'} Screen</p>
		</>
	)
}