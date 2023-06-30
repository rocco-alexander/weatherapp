import {buildWeatherGrid, removeNodes, showCurrentWeather, showError} from "../../API/RenderManager.js";
import {fetchCurrentWeather} from "../../API/fetchData.js";
import {cities} from "../../../Public/cities.js";
import {resetActive} from "../Buttons/ButtonGroup.js";

class SearchForm extends HTMLElement{
    connectedCallback(){
        // POSSIBLE ERROR MESSAGES
        const ERROR_NO_LOCATION_ENTERED = 'Please enter a location.';
        const ERROR_NO_LOCATION_FOUND = 'Location could not be found.';

        const search = async (event) =>{
            event.preventDefault();
            if(!searchField.value){
                showError(errorContainer, ERROR_NO_LOCATION_ENTERED);
            }
            else{
                const searchString = searchField.value;
                    const data = await fetchCurrentWeather(searchString);
                    // console.log(data);
                    if(data.error){
                        document.getElementById('results').innerHTML ='';
                        showError(errorContainer, ERROR_NO_LOCATION_FOUND);
                    }
                    else{
                        document.getElementById('results').innerHTML ='';
                        showCurrentWeather(data);
                        buildWeatherGrid(data);
                        removeNodes(errorContainer);
                        resetActive(1)
                    }
                searchField.value = '';
            }
        };

        const checkInput = (e)=> {
            const result = e.target.value.match(/^([A-Za-z\s.])*$/);
            if(result){
                showResults(e.target.value)
            }else{
                e.target.value = e.target.value.substring(0, e.target.value.length - 1)
            }
        };

        // Checks for cities that match input
        const autocomplete = (input) => {
          if(input === ''){
              return[]
          }else{
              let query = input.substring(1,input.length);
              let reg = new RegExp(`^[${input[0].toLowerCase()}]${query.toLowerCase()}`);
              // console.log(reg);
              return cities.filter((term)=>{
                  if(term.toLowerCase().match(reg)){
                      return term;
                  }
              })
          }
        };

        const showResults = (input) =>{
            const result = document.getElementById('results');
            result.innerHTML = '';
            let terms = autocomplete(input);
            let list = document.createElement('ul');
            terms.forEach((term)=>{
                let item = document.createElement('li');
                item.innerText = term;
                item.addEventListener('click', setInputToText);
                list.appendChild(item)
            });
            result.appendChild(list)
        };

        const setInputToText = (e) =>{
            searchField.value = e.target.innerHTML;
            searchField.focus();
            showResults('')
        };

        //Wrappers
        const formContainer = document.createElement('div');
        const searchField_results = document.createElement('div');
        searchField_results.id = 'search-field_results-container';

        //Form
        const searchForm = document.createElement('form');

        // Text Input
        const searchField = document.createElement('input');
        searchField.autocomplete = 'off';
        searchField.id = 'search-field';
        searchField.type='text';
        searchField.placeholder='Search city...';
        searchField.addEventListener('input',checkInput);

        // Search Results
        const results = document.createElement('div');
        results.id = 'results';

        //Button
        const submitButton = document.createElement('button');
        submitButton.className = 'submitFormButton';
        submitButton.addEventListener("click", search);
        submitButton.innerText="Search";

        //Error Container
        const errorContainer = document.createElement('div');

        //Tie them up
        searchField_results.appendChild(searchField);
        searchField_results.appendChild(results);
        // searchForm.appendChild(searchField);
        searchForm.className='form';
        formContainer.appendChild(searchForm);
        searchForm.appendChild(searchField_results);
        searchForm.appendChild(submitButton);
        formContainer.appendChild(errorContainer);
        this.append(formContainer);
    };
}
customElements.define('search-form', SearchForm);