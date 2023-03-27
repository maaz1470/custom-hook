import { useCallback, useEffect, useState } from 'react'



const useCustomWidth = (width) => {
	const [onScreenWidth, setOnScreenWidth] = useState(false)
	const screenTotalWidth = useCallback(() => {
		setOnScreenWidth(window.innerWidth < width)
	},[width])
	useEffect(() => {
		
		screenTotalWidth()
		window.addEventListener('resize',screenTotalWidth)

		return () => window.removeEventListener('resize',screenTotalWidth)
	},[screenTotalWidth])
	return onScreenWidth;
}
export default useCustomWidth;