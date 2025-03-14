import { useState, useEffect, useRef } from "react"

interface UseTypewriterProps {
     words: string[]
     loop?: boolean
     typeSpeed?: number
     deleteSpeed?: number
     delaySpeed?: number
}

export function useTypewriter({
     words = [""],
     loop = false,
     typeSpeed = 80,
     deleteSpeed = 50,
     delaySpeed = 1500,
}: UseTypewriterProps): string {
     const [text, setText] = useState("")
     const [wordIndex, setWordIndex] = useState(0)
     const [isDeleting, setIsDeleting] = useState(false)
     const [isTyping, setIsTyping] = useState(true)
     const timeoutRef = useRef<NodeJS.Timeout | null>(null)

     useEffect(() => {
          const currentWord = words[wordIndex]

          const handleTyping = () => {
               if (isDeleting) {
                    setText(currentWord.substring(0, text.length - 1))
               } else {
                    setText(currentWord.substring(0, text.length + 1))
               }

               if (!isDeleting && text === currentWord) {
                    // Start deleting after delay
                    setIsTyping(false)
                    timeoutRef.current = setTimeout(() => {
                         setIsDeleting(true)
                         setIsTyping(true)
                    }, delaySpeed)
               } else if (isDeleting && text === "") {
                    // Move to next word
                    setIsDeleting(false)
                    setWordIndex((prev) => {
                         if (prev === words.length - 1) {
                              return loop ? 0 : prev
                         }
                         return prev + 1
                    })
               } else {
                    // Continue typing or deleting
                    const speed = isDeleting ? deleteSpeed : typeSpeed
                    timeoutRef.current = setTimeout(() => {
                         setIsTyping(true)
                    }, speed)
               }
          }

          if (isTyping) {
               handleTyping()
          }

          return () => {
               if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
               }
          }
     }, [words, wordIndex, isDeleting, text, loop, typeSpeed, deleteSpeed, delaySpeed, isTyping])

     return text
}

