// Unsplash API
const count = 25;
const apiKey = 'HFqpXZvvLU-mQy2Nz7H9kosFeKa4rfe-qu_z_psKStI'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Imagess
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Create elements for links & Photos, Add to DOM
function displayPhotos() {
   // run function for each object in photosArray
   photosArray.forEach((photo) => {
      // create <a> to unsplash
      const item = document.createElement('a');
      item.setAttribute('href', photo.links.html)
      item.setAttribute('target', '_blank');
      // Create img for photo
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular)
      img.setAttribute('alt', photo.alt_description)
      img.setAttribute('title', photo.alt_description)
      // Put img inside <a>, then put both in imgCont El
      item.appendChild(img);
      imageContainer.appendChild(item);
   });
}

// Get photos from unsplash api
async function getPhotos() {
   try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
   } catch (err) {
      // Catch error here
   }
}

// On Loader

getPhotos()