// Promises - funfunfunction
// https://www.youtube.com/watch?v=2d7s3spWAzo

// as a promise
import loadImagePromised
from '.load-image-promised'

loadImagePromised('images/cat3.jpg')
  .then((img) => {
    let imgElement =
      document.createElement('img')
    imgElement.src = img.src
    document.body.appendChild(imgElement)
  })

// as a callback
loadImagePromised('images/cat3.jpg',
  (error, img) => {
    let imgElement =
      document.createElement('img')
    imgElement.src = img.src
    document.body.appendChild(imgElement)
  })

// as callback hell / christmas tree of doom
import loadImage
from '.load-image-callbacked'

let addImg = (src) => {
  let imgElement =
    document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
}

loadImage('images/cat3.jpg', (error, img1) => {
  if (error) throw error
  addImg(img1.src)
  loadImage('images/cat2.jpg', (error, img2) => {
    if (error) throw error
    addImg(img2.src)
    loadImage('images/cat3.jpg', (error, img3) => {
      if (error) throw error // well this is a mess...
      addImg(img3.src)
    })
  })
})

// loadImage function as callback
function loadImage (url, callback) {
  let image = new Image()

  image.onload = function () {
    callback(null, image)
  }

  image.onerror = function () {
    let message =
      `Could not load image at ${url}`
    callback(new Error(msg))
  }

  image.src = url
}

/* --- Load Image function --- */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export default loadImage // There is only a single default export per module

/* loadImage rewritten to use a Promise */
function loadImage (url, callback) {
  return new Promise((resolve, reject) => { // resolve and reject are both functions
    let image = new Image() // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

    image.onload = function () { // success
      // callback(null, image)
      resolve(image) // call resolve with success image
    }

    image.onerror = function () {
      let message =
        `Could not load image at ${url}`
      // callback(new Error(msg))
      reject(new Error(msg))
    }

    image.src = url
  })
}

/* --- app.js that relies on Promises from loadImage --- */
import loadImage
from '.load-image-callbacked'

let addImg = (src) => {
  let imgElement =
    document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
}

// loadImage returns promises so you need to call `then` on the result.
// But this is still a nested mess
loadImage('images/cat3.jpg').then(img => {
  addImg(img1.src)
  loadImage('images/cat2.jpg').then(img2 => {
    addImg(img2.src)
    loadImage('images/cat3.jpg').then(img3 => {
      addImg(img3.src)
    })
  })
})

// un-nesting the loadImage calls
Primise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then(images => { // it's an array or results
  images.forEach(image => addImage(image.src)) // each image gets added only when all are successfully returned
})