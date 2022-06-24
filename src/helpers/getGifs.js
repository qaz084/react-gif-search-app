export  const getGifs= async(category)=>{

    const apiKey='azP5e3LBmsFPxAbr8NCmrxvNerPO269S';
    const searchLimit=5;
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${searchLimit}`;
    const respuesta= await fetch(url);
    const {data} = await respuesta.json();
   
    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url,
        category:category,
    }))
    
    return gifs;
}