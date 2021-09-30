import { useState, useEffect } from "react"

const useVisible = (ref, options) => {
   const [isVisible, setIsVisible] = useState(false)

   if (!options) {
      options = {
         root: null, 
         threshold: 0,
         rootMargin: '0px'
      }
   }
   
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsVisible(entry.isIntersecting)
            // console.log(entry.isIntersecting)
         }, options)

      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      // return () => { observer.disconnect() }
    }, [ref, options])
  
    return isVisible
}

export default useVisible
