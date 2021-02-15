import {buttons} from './buttons';
import {list} from '../global_variables';

let sortPriority = document.querySelector('.sort_priority');

function compare( a, b) {
    if ( b.priority < a.priority ){
      return -1;
    }
    else if ( b.priority > a.priority ){
      return 1;
    }
    return 0;
}

function sort() {

    let bookArray = JSON.parse(localStorage.getItem('allBooks'));
    bookArray.sort(compare)

    list.innerHTML = '';

    if(bookArray.length > 0) {
            bookArray.map(book => {
                let trElement = document.createElement('tr');

                trElement.innerHTML = ` <td>${book.title}</td><td> ${book.author}</td> <td>${book.category}</td> <td> ${book.priority}</td>`;
        
                list.append(trElement);
        
                buttons(book.id, trElement)
    
            })
    }
}

sortPriority.addEventListener('click', sort);