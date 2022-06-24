import { GifItem } from "../components/GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onCloseHandler }) => {

  const {gifs,isLoading} = useFetchGifs(category);

  return (
    <>

      <div className="x-container">
        <h3>{category}</h3>
        <button onClick={onCloseHandler}>X</button>
      </div>

        {
          isLoading && <h2>Loading images...</h2>

        } 
      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
   
    </>
  );
};
