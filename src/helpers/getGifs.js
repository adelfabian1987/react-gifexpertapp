export const getGif = async( category ) => {
    const apikey = 'wbepnz8gUs26C1hYl9umJgeAOhukA4rD';
    const gif_url = 'api.giphy.com/v1/gifs/search';
    const limit = 3;
    //const peticion = fetch(`http://${gif_url}?api_key=${apikey}`);

    const url = `https://${gif_url}?q=${encodeURI( category )}&limit=${limit}&api_key=${apikey}`;
    const peticion = await fetch(url);
    const { data } = await peticion.json();

    //console.log(data);
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });        
    return gifs;
}