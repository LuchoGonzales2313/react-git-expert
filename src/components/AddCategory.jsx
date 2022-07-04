import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()
    
    const onInputChange=({target})=>{
        setInputValue(target.value)
        // console.log(target.value)
        // setInputValue('Hola Mundo')
        //setCategories(......inputValue)

        
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim().length<=1) return;       
        // setCategories(categories=> [inputValue,...categories])
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Buscar GIFs" 
            value={inputValue}
            onChange={onInputChange}/>
        </form>
)}
