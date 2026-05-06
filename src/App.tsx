// import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />

      <main>
        <Home />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
