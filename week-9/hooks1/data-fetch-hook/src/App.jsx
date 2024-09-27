import {useState} from "react";
import axios from "axios";

function useTodos(n){
    const [todos,setTodos] = useState({})
    const [loading, setLoading] = useState(true);
    const link = ''
    useEffect(()=>{
        const getIntervarl = setInterval(()=>{
            axios.get(link)
                .then(res=>{
                    setTodos(res.data.todos)
                    setLoading(false)
                })
        },n)
        axios.get(link)
            .then(res=>{
                setTodos(res.data.todos)
                setLoading(false)
            })
        return ()=>{
            clearInterval(getIntervarl)
        }
    },[n])

    return {todos,loading};
}

function App(){
    return <></>
}

export default App