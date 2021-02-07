import {buttons} from './buttons';
import {list} from '../global_variables';
import { counter } from '../counter';

const display = () => {
    
    let bookArray = JSON.parse(localStorage.getItem("allBooks"));
    if(bookArray == null) bookArray = [];

    if(bookArray.length > 0) {
        bookArray.map(book => {
    
            let trElement = document.createElement('tr');

            trElement.innerHTML = ` <td>${book.title}</td><td> ${book.author}</td> <td>${book.category}</td> <td> ${book.priority}</td>`;
    
            list.append(trElement);
    
            buttons(book.id, trElement)
        })
    };
}


display();
counter();
