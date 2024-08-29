import ReactDOM from 'react-dom/client'
import App from './App.js'

const app = ReactDOM.createRoot(document.getElementById('app'))

const time = new Date()
app.render(<App time={time} />)
