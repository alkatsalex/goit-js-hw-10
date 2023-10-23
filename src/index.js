import { fetchBreeds, fetchCatByBreed, el, loading } from './cat-api.js';


const KeY = "live_heLL8lPfd4A2Lpv2S81Bs4OmGBDqCQu3c6GUdGoDG7DG6OuoRNBt0u87Pw8zAWuP"


fetchBreeds().then(arr => {
  loading()
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
      console.log(breeds);
        return `<img src="${url}" alt="cat" width = "300px">
        <h2>${breeds[0].name}</h2>
        <h3>${breeds[0].temperament}</h3>
        <p>${breeds[0].description}</p>`
      }
  ).then(
    markup => {
      loading()
      return el.catCard.innerHTML = markup
    }
  )
})


 











