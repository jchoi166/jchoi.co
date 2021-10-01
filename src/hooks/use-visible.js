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
            // if card component is already shown, doesn't revert back to hidden state
            if (entry.target.dataset.type === 'card' && !entry.isIntersecting){
               return
            }
            if (entry.target.dataset.type === 'about' && !entry.isIntersecting){
               return
            }
            setIsVisible(entry.isIntersecting)
         }, options)

      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [ref, options])
  
    return isVisible
}

export default useVisible
