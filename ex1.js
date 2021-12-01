
window.onload = () => {

    fetchImages('car')

}




async function fetchImages(query) {
    
    const API_KEY = '563492ad6f9170000100000168fc5af269c64c08bc390787770b88a3'
    const API_CALL = `https://api.pexels.com/v1/search?query=`

    //-fetching data
    let response = await fetch(API_CALL + query, {
            method: 'GET',
            headers: {
                Authorization: API_KEY
                }
            })

    let data = await response.json()
    let photos = data.photos
    
    console.log(photos)

    return data
}

let loadButton = document.querySelector('.btn-primary')

loadButton.addEventListener('click', () => {
    let card = ''
    let inputValue = document.querySelector('.input-search').value
    fetchImages(inputValue)
    

})
