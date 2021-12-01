const API_Auth = '563492ad6f917000010000015a4f0e13424d41c4853f18f43f2fc2bb'


const loadSecondaryImage = []

// FETCH
const myFetch = (query) => {
    fetch("https://api.pexels.com/v1/search?query=" + query, {
        headers: {
            Authorization: API_Auth
        }
    })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            loadSecondaryImage.push(data)
            console.log(data);
        })
}

// SEARCH INPUT
const mysearchResult = (event) => {
    const searchBar = event.currentTarget.value
    console.log(searchBar);
}

window.onload = () => {

    myFetch('horse')

}

// SINGLE CARD
const singleCard = (photo) => {
    return `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="card-img-top" onclick="getModalData(event)" alt="...">
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
                    Edit
                </button>
                </div>
                <small class="text-muted">${photo.id}</small>
            </div>
            </div>
        </div>
        </div>`
}




// BUTTON LOADER
const loadSecondaryImagesButton = () => {
    showAlert(`Successfully loaded ${loadSecondaryImage[0].photos.length} pictures`)
    const mainAlbum = document.querySelector('.mainrow')
    mainAlbum.innerHTML = ''

    loadSecondaryImage.forEach(array => {
        const photos = array.photos
        // console.log('myArray', array);
        photos.forEach(photo => {
            console.log('myphoto', photo);
            mainAlbum.innerHTML += `${singleCard(photo)}`

        })

    })

}



function createAlertBox(alertInnerText) {
    return `<div class="alert alert-primary myModAlert" role="alert">
        ${alertInnerText}
    </div>`
}

function appendAlert(message) {
    let getBody = document.querySelector('body')
    return getBody.insertAdjacentHTML('afterbegin', `${createAlertBox(message)}`)
}

function displayNone() {
    let alertDiv = document.querySelector('.myModAlert')
    alertDiv.classList.add('d-none')
}

function showAlert(info) {
    appendAlert(info)
    setTimeout(displayNone, 5000);
}
aBtns.forEach(btn => btn.addEventListener('click', showAlert))

