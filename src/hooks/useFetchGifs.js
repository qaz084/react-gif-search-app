import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading,setIsLoading]=useState([true]);

    const cargarGifs = async() => {
      const Newgifs = await getGifs(category);
      setGifs(Newgifs);
      setIsLoading(false)
    };
  
    useEffect(() => {
      cargarGifs();
    }, []);

  return {

      gifs,
      isLoading,

  }

}


