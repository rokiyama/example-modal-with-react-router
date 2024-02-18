import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import { Modal } from './components/Modal.tsx'
import { ModalLast } from './components/ModalLast.tsx'
import { ModalNext } from './components/ModalNext.tsx'
import { ModalTop } from './components/ModalTop.tsx'
import { useModalRoute } from './hooks/useModalRoute.ts'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'

export const App = () => {
  const location = useLocation()
  const { background } = useModalRoute()
  console.log(`App: background=${background}`)

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path={background} element={<Modal />}>
            <Route path="modal-top" element={<ModalTop />} />
            <Route path="modal-next" element={<ModalNext />} />
            <Route path="modal-last" element={<ModalLast />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}
