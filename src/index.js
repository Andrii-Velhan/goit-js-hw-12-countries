import './styles.css';
import countryCardTpl from './templates/country-card.hbs'
//import fetchCountries from './js/fetchCountries';

//fetchCountries(ukraine);
const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchInput: document.querySelector('input#inputName'),
};

refs.searchInput.addEventListener('input', onSearch)

function onSearch (e) {
    e.preventDefault();

    const input = e.target;
    const searchQuery = input.value;
    // const input = e.target;
    // const searchQuery = input.value;
    console.log(searchQuery);

    fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(error => console.log(error))
    .finally(() => input.reset())
}

function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
        response => {
            return response.json();
    });  
}

function renderCountryCard(country) {
        const markUp = countryCardTpl(country);        
        refs.cardContainer.innerHTML = markUp;
}