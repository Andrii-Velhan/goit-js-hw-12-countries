import './styles.css';
import countryCardTpl from './templates/country-card.hbs'
console.log(countryCardTpl);
import fetchCountries from './js/fetchCountries';

//fetchCountries(ukraine);
const refs = {
    cardContainer: document.querySelector('.js-card-container')
    // BtnSwitch = document.querySelector('input.js-switch-input')
}



fetch('https://restcountries.eu/rest/v2/name/canad')
    .then(response => {
        ///console.log(response.json());
        return response.json();
    })
    .then(searchQuery => {
        console.log(searchQuery);
        const markUp = countryCardTpl(searchQuery);
        console.log(markUp);
        refs.cardContainer.innerHTML = markUp;
    })
    .catch(error => {
        console.log(error);
    });