import { useState } from "react";

export const AddCategory = ({handlerInputGifs}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange=({target})=>{
      
        setInputValue(target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
       if(inputValue.trim().length<=1)return;

        // handlerInputGifs(valorx=>[inputValue,...valorx]);
        // handlerInputGifs((x)=>[inputValue,...x]);
        handlerInputGifs(inputValue.trim())
        // handlerInputGifs((x)=>[inputValue,...x]);
        setInputValue('') ;
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
         type="search"
         placeholder='Search Gifs...'
         value={inputValue}
         onChange={handleInputChange}
          />
    </form>
  )
}
