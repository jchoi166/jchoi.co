import { useState, useEffect } from "react"

const useVisible = (ref) => {
   const [isVisible, setIsVisible] = useState(false)

   
   useEffect(() => {

      const observer = new IntersectionObserver(
         ([entry]) => setIsVisible(entry.isIntersecting)
       )

      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      // return () => { observer.disconnect() }
    }, [ref])
  
    return isVisible
}

export default useVisible
