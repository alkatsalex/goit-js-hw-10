import Notiflix from 'notiflix';

const KeY = "live_heLL8lPfd4A2Lpv2S81Bs4OmGBDqCQu3c6GUdGoDG7DG6OuoRNBt0u87Pw8zAWuP"

export const el = {
    catCard:document.querySelector('.cat-info'),
    breedSelect: document.querySelector('.breed-select'),
    error: document.querySelector('.error'),
    loader: document.querySelector('.loader')
}


export function fetchBreeds() {
    el.loader.classList.toggle('js-hiden');
  return  fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KeY}`)
  .then(response => {
    if (!response.ok) {

      throw new Error(response.status);
    }
    return response.json();
  })
.then(data => {
    console.log(data); return data
})
.catch(error => {
  loading()
    el.loader.classList.toggle('js-hiden');
    Notiflix.Notify.failure(`😿cat not found`, {timeout: 10000, position: 'right-top', clickToClose: true})
  });
}


export function fetchCatByBreed(breedId) {
    loading()
    el.catCard.innerHTML = ""
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${KeY}`)
    .then(response => {
        if (!response.ok) {

          throw new Error(response.status);
        }
        return response.json();
      })
    .then(
        data => {
            // console.log(data[0])
            return data[0]
        }
      )
      // .catch(error => {
      //   loading()
          
      //     Notiflix.Notify.failure(`😿cat not found`, {timeout: 5000, position: 'right-top', clickToClose: true})
      //   }); 
}


 export function loading() {
    el.loader.classList.toggle('js-hiden');
    el.breedSelect.classList.toggle('js-hiden');

  }


