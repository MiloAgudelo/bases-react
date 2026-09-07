import { AuthProvider } from './context/AuthContext'
import { Counter } from './components/Counter'
import { LoginPage } from './components/LoginPage'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 gap-6">
        <h1 className="text-3xl font-bold underline">React + TS</h1>
        <Counter />
        <LoginPage />
      </div>
    </AuthProvider>
  )
}

export default App
