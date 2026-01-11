import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'


function MainLayout() {
  return (
    <>
      <div className="layout-container">
      <Header />             {/* toujours visible */}
        <Outlet />           {/* affichera Home, About, Housing, Error */}
      </div>
    </>
  )
}

export default MainLayout
