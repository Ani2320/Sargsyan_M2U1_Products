import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './styles/body.css'
import './styles/common.css'
import './styles/product.css'

function App() {
  const screenName = "Productos"
  
  return (
    <>
      <Header screenName = {screenName}/>
      <MainContent />
      <Footer />
    </>
  )
}

export default App
