import LayoutDefault from '../template/LayoutDefault'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    //./template/LayoutDefault -> {children}
    <LayoutDefault>
      <main>
        <Form />
      </main>
    </LayoutDefault>
  )
}

export default App

