console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
});

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showPics(json['message']))
}

function showPics(json) {
    const dogImages = document.getElementById("dog-image-container")
    json.forEach(dogPic => {
    const img = document.createElement('img')
    img.src = dogPic;
    dogImages.appendChild(img)
    })
}

function fetchBreeds() {
   fetch("https://dog.ceo/api/breeds/list/all")
   .then(resp => resp.json())
   .then(json => breeds(json['message']))
}

function breeds(json) {
    const breedList = document.getElementById("dog-breeds")
    for (const key in json) {
        const li = document.createElement('li')
        li.innerHTML = `${key}: ${json[key]}`;
        breedList.appendChild(li);
 li.addEventListener('click', () => {
    event.target.style.color = 'red';
    })
}}


