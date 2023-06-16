import {showError, removeNodes,showCurrentWeather} from "../../API/RenderManager.js";
import {fetchCurrentWeather} from "../../API/fetchData.js";
class SearchForm extends HTMLElement{
    connectedCallback(){
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
                    console.log(data);
                    if(data.error){
                        showError(errorContainer, ERROR_NO_LOCATION_FOUND);
                    }
                    else{
                        showCurrentWeather(data);
                        removeNodes(errorContainer);
                    }
                searchField.value = '';
            }
        };

        //Wrapper
        const formContainer = document.createElement('div');

        //Form
        const searchForm = document.createElement('form');

        // Text Input
        const searchField = document.createElement('input');
        searchField.type='text';
        searchField.placeholder='Search city...';

        //Button
        const submitButton = document.createElement('button');
        submitButton.addEventListener("click", search);
        submitButton.innerText="Search";

        //Error Container
        const errorContainer = document.createElement('div');

        //Tie them up
        searchForm.appendChild(searchField);
        searchForm.appendChild(submitButton);
        searchForm.className='form';
        formContainer.appendChild(searchForm);
        formContainer.appendChild(errorContainer);
        this.append(formContainer);
    };
}

customElements.define('search-form', SearchForm);