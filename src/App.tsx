import { Route, Routes } from 'react-router-dom'
import { About } from './About.tsx'
import { Contact } from './Contact.tsx'
import { Home } from './Home.tsx'
import { Layout } from './Layout.tsx'
import { Modal } from './Modal.tsx'

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/modal/:id" element={<Modal />} />
      </Routes>
    </div>
  )
}
