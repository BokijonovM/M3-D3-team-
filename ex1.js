
window.onload = () => {

    fetchImages('car')

}



let readyImageArray = []

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
    readyImageArray.push(data.photos)
    console.log(readyImageArray)

    return data
}

let loadButton = document.querySelector('.btn-primary')

loadButton.addEventListener('click', () => {
    let card = ''
    let inputValue = document.querySelector('.input-search').value
    let boardNode = document.querySelector('.album')
    fetchImages(inputValue)

    readyImageArray.forEach(photo => {
        console.log(photo.photos)
        card = `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${photo.photos.src.medium}" class="card-img-top" onclick="getModalData(event)" alt="...">
            <div class="card-body">
            <p class="card-text">
            ${photo.photographer}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                    Hide
                </button>
                </div>
                <small class="text-muted">${photo.id}</small>
            </div>
            </div>
        </div>
        </div>
        `
    })
    boardNode.innerHTML = card
})
