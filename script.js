// Unsplash API
const count = 25;
const apiKey = 'HFqpXZvvLU-mQy2Nz7H9kosFeKa4rfe-qu_z_psKStI'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from unsplash api
async function getPhotos() {
   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

   } catch (err) {
      // Catch error here
   }
}

async function displayPhotos() {

}

// On Loader

getPhotos()