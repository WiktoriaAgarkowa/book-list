import {buttons} from './buttons';
import {list} from '../global_variables';

let bookArray = JSON.parse(localStorage.getItem("allBooks"));

let sortPriority = document.querySelector('.sort_priority');


function compare( a, b) {
    if ( b.priority < a.priority ){
      return -1;
    }
    if ( b.priority > a.priority ){
      return 1;
    }
    return 0;
}

function sort() {

    list.innerHTML = '';

    if(bookArray.length > 0) {
        
        bookArray.sort(compare)
            bookArray.map(book => {
                let trElement = document.createElement('tr');

                trElement.innerHTML = ` <td>${book.title}</td><td> ${book.author}</td> <td>${book.category}</td> <td> ${book.priority}</td>`;
        
                list.append(trElement);
        
                buttons(book.id, trElement)
    
            })
    };
}


sortPriority.addEventListener('click', sort);

