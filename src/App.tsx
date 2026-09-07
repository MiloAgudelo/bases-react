import { AuthProvider } from './context/AuthContext'
import { Counter } from './components/Counter'
import { LoginPage } from './components/LoginPage'
import { UsersPage } from './components/UsersPage'
import { FormsPage } from './components/FormsPage'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col items-center py-10 px-4 gap-8">
        <h1 className="text-3xl font-bold underline">React + TS</h1>
        <Counter />
        <LoginPage />
        <UsersPage />
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
