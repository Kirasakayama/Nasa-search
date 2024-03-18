let searched = document.querySelector('.search-Input')
let searchButton = document.querySelector('.search-Button')
let sectionn = document.querySelector('section');
let imgs = {};


  searchButton.addEventListener('click', () => {
if(searched.value != ''){
    const APIlink = `https://images-api.nasa.gov/search?q=${searched.value}` ;
    fetch(APIlink)
    .then(data => data.json())
    .then(data => imgs = {...data})
    .then(data => 
       imgs.collection.items.forEach(element  => {
   
        sectionn.innerHTML += `
        <div class="imgFounded">
           <img src=${element.links[0].href}>
           <h3>${element.data[0].title}</h3>
           <p>${element.data[0].description}</p>
        </div>` ;



    })
    )
}

  })
