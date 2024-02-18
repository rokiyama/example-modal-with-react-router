import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useModalRoute } from '../hooks/useModalRoute'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { closeModal: endModalPath } = useModalRoute()

  const modalRef = useRef<HTMLDivElement | null>(null)
  // const { id } = useParams()

  useEffect(() => {
    const observerRefValue = modalRef.current
    if (observerRefValue) {
      disableBodyScroll(observerRefValue)
    }
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue)
      }
    }
  }, [])

  return (
    <div
      ref={modalRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(91, 112, 131, 0.4)',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',

        display: isOpen ? 'flex' : 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => {
        endModalPath()
        setIsOpen(false)
      }}
    >
      <div
        style={{
          width: 350,
          height: 350,
          borderRadius: 10,
          backgroundColor: 'white',
          overflowY: 'scroll',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Outlet />
      </div>
    </div>
  )
}
