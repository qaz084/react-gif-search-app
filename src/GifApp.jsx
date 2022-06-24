import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

const GifApp = () => {

    const [gifs, setGifs] = useState(['Dragon Ball Z']);
   
    const addGif=(gifName)=>{
        
            if(gifs.includes(gifName))return;
           setGifs([gifName,...gifs]);    
            
    };

    const onClosehandler = (e) => {
      const buttonClicked = e.target;
      const gifToRemove = buttonClicked.previousElementSibling.innerText;

      const newGifs= gifs.filter((gif) => {
        return gif !== gifToRemove;
      })

      setGifs(newGifs);
    };

  return (
    <>
      <h1>GIF APP</h1>

      <AddCategory handlerInputGifs={addGif}/>

        {gifs.map((category)=>(
             <GifGrid 
                onCloseHandler={onClosehandler}
                category={category}
                key={category}
             />
           ))}

    </>
  )
}

export default GifApp
