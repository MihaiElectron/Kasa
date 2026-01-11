import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';


function MainLayout() {
  return (
    <>
      <div className="layout-container">
      <Header />             {/* toujours visible */}
        <Outlet />           {/* affichera Home, About, Housing, Error */}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
