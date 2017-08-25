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
import loadImageCallbacked
from '.load-image-callbacked'

let addImg = (src) => {
  let imgElement =
    document.createElement('img')
  imgElement.src = img.src
  document.body.appendChild(imgElement)
}

loadImageCallbacked('images/cat3.jpg', (error, img1) => {
  if (error) throw error
  addImg(img1.src)
  loadImageCallbacked('images/cat2.jpg', (error, img2) => {
    if (error) throw error
    addImg(img2.src)
    loadImageCallbacked('images/cat3.jpg', (error, img3) => {
      if (error) throw error // well this is a mess...
      addImg(img3.src)
    })
  })
})
