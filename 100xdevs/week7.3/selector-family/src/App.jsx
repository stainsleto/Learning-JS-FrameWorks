import { RecoilRoot, useRecoilState } from 'recoil'
import './App.css'
import { todosAtomFamily } from './recoil/atoms/atoms'

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />

      </RecoilRoot>

    </>
  )
}

function Todo({id}){
  const [todo,setTodo] = useRecoilState(todosAtomFamily(id));

  return( 
    <>
      {todo.title}
      {todo.description}
    </>
  )
}

export default App
