
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => {
    countries(data);
})

function countries(data){
    const ul = document.getElementById('country-list');


    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        
        // country.name; 
        
        const li = document.createElement('li');
        li.innerHTML = `${country.name} <button onclick="countryDetails('${country.name}')" 
                                                class="btn btn-sm btn-outline-primary float-end">
                                                View Details
                                        </button>`
        ul.appendChild(li);
    }

}

function countryDetails(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(res =>res.json())
    .then(data =>{
        const {name, capital, area, population, flag} = data[0];
        console.log(data);
        document.getElementById('cty-detail').style.display="block";
        document.getElementById('cnt-name').innerText = name;
        document.getElementById('cnt-capital').innerText = capital;
        document.getElementById('cnt-area').innerText =  area;
        document.getElementById('cnt-population').innerText = population;
        document.getElementById('cnt-img').src = flag;
        
    })
    
}





//Close button Handelar
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function(e){
    e.target.parentNode.style.display = "none";

})


