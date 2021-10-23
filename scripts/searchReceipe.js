async function searchReceipe(url){
    let response  = await fetch(url);
    let receipe = response.json();
    return receipe;
}

export default searchReceipe