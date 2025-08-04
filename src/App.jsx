import './App.css'
import Button from './components/button'
import Form from './components/form'
import { Card } from './components/styles/style'

function App() {
  return (
    <main>
      <Button>Olá</Button>
      <Form></Form>
      <Card>
        <h2>Título do Card</h2>
        <p>Este é um exemplo de card estilizado.</p>
      </Card>
    </main>
  )
}

export default App
