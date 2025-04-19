import './App.css'
import  { Header, ImageGallery } from './components'

function App() {

  return (
    <>
     <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">📸 Picsum Image Gallery</h1>
      <Header />
      <ImageGallery />
    </div>
    </>
  )
}

export default App
