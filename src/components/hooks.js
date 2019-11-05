// hooks.js
import { useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      console.log(ref.current)
      console.log(event.target)
      const outsideMobileContainer = document.getElementsByClassName(
        "js-outside-mobile-menu"
      )
      console.log(outsideMobileContainer)
      const containsElement = ref.current.contains(event.target)
      if (!ref.current || containsElement) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}
