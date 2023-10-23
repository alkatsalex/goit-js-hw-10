import { fetchBreeds, fetchCatByBreed, el, loading } from './cat-api.js';
import Notiflix from 'notiflix';

const KeY = "live_heLL8lPfd4A2Lpv2S81Bs4OmGBDqCQu3c6GUdGoDG7DG6OuoRNBt0u87Pw8zAWuP"

fetchBreeds().then(arr => {
  el.loader.classList.toggle('js-hiden');
  el.breedSelect.classList.toggle('js-hiden');
return arr.map(({name, id}) => 
`<option value="${id}">${name}</option>`
).join("")}
)
.then(
markup => {return el.breedSelect.innerHTML = markup;}
)


el.breedSelect.addEventListener('change', () => {
  
  const selectedValue = el.breedSelect.value;
  fetchCatByBreed(selectedValue)
  .then( 
    ({ breeds, url }) => {
      
        return `<div class="card-border">
        <img class="photo" src="${url}" alt="cat" width = "300px">
              <h2 class="breeds">${breeds[0].name}</h2>
              <h3 class="temperament">${breeds[0].temperament}</h3>
              <p class="description">${breeds[0].description}</p>
      </div>`
      }
  ).then(
    markup => {
      loading()
      return el.catCard.innerHTML = markup
    }
  )
  .catch(error => {
    loading()
      
      Notiflix.Notify.failure(`😿cat not found`, {timeout: 5000, position: 'right-top', clickToClose: true})
    }); 
})


 











