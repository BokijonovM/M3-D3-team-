
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
             console.log("Hello")

            let data = await response.json()
            console.log(data)
}

