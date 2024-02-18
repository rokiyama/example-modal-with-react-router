import { useCallback } from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom'

interface GlobalLocationState {
  background: string | null
}

export const useModalRoute = () => {
  const navigate = useNavigate()
  const location: Location<GlobalLocationState | null> = useLocation()
  const background = location.state?.background || null

  const openModal = useCallback(
    (to: string) => {
      console.log('openModal', to, location.pathname)
      navigate(to, { state: { background: location.pathname } })
    },
    [navigate, location],
  )

  const closeModal = useCallback(() => {
    navigate(background || '/')
  }, [navigate, background])

  const navigateModal = useCallback(
    (to: string) => {
      navigate(`${background}/${to}`, { state: { background } })
    },
    [navigate, background],
  )

  return {
    background,
    openModal,
    closeModal,
    navigateModal,
  }
}
