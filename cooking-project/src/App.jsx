import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { routesArray } from './entites/routesArray'
import RecipesId from './components/pages/Recipes/[id]'

function App() {
  return (
    <div className='App'>

      <Header />
      <Routes>
        <Route path='/recipes/:id' element={<RecipesId />} />
        {
          routesArray.map((route) => (
            <Route key={route.id} path={route.path} element={<route.component />} />
          ))
        }
      </Routes>
      <Footer />
    </div>
  )
}

export default App
