// Unsplash API
const count = 25;
const apiKey = 'HFqpXZvvLU-mQy2Nz7H9kosFeKa4rfe-qu_z_psKStI'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Imagess
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];



// setAttributes Helper function
function setAttributes(element, attributes) {
   for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
   }
}

// Create elements for links & Photos, Add to DOM
function displayPhotos() {
   // run function for each object in photosArray
   photosArray.forEach((photo) => {
      // create <a> to unsplash
      const item = document.createElement('a');
      setAttributes(item,
         {
            href: photo.links.html,
            target: '_blank'
         });
      // Create img for photo
      const img = document.createElement('img');
      setAttributes(img,
         {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
         });
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