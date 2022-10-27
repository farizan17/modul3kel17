import React, {useEffect} from "react";
import TextInput from "./components/TextInput";

function App() {
    
    const [loading, setLoading] = React.useState(true) 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        if (!loading) alert("loading selesai")
    }, [loading])

    if (loading) return <div>loading...</div>


    return <div className="">
      <TextInput />
        
    </div>
}
export default App;
