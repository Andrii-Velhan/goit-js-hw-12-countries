import './styles.css';
import countryCardTpl from './templates/co'
console.log(countryCardTpl);
import fetchCountries from './js/fetchCountries';

//fetchCountries(ukraine);
const cardContainer = document.querySelector('.js-card-item');
const BtnSwitch = document.querySelector('input.js-switch-input');



// fetch('https://restcountries.eu/rest/v2/name/canad')
//     .then(response => {
//         ///console.log(response.json());
//         return response.json();
//     })
//     .then(searchQuery => {
//         console.log(searchQuery);
//         const markUp = countryCardTpl(searchQuery);
//         console.log(markUp);
//     })
//     .catch(error => {
//         console.log(error);
//     });