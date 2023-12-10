
import './App.css'
import About from './components/about'
import Academic from './components/academic'
import ContentLayout from './components/content-layout'
import Home from './components/home'
import Layout from './components/layout'
import Publications from './components/publications'
import ResearchAndProjects from './components/research&Projects'
import Seperator from './components/seperator'
import Waitinglist from './components/waitinglist'

function App() {

  return (
    <div className='bg-[#040117] scroll-smooth'>
      <Layout>
        <Home />
        <Seperator />
        <ContentLayout>
          <About />
          <Academic />
          <ResearchAndProjects />
          <Publications />
        </ContentLayout>
        <Waitinglist />
      </Layout>
    </div>
  )
}

export default App
