//import { BasicFunctions } from './typescript/BasicFunctions'
//import { BasicTypes } from './typescript/BasicTypes'
//import { ObjectLiterals } from './typescript/ObjectLiterals'

import { Counter } from "./components/Counter"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold underline mb-5">React + TS</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      <Counter />
    </div>
  )
}

export default App
