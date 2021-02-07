export const counter = () => {
    let categories = document.querySelectorAll('option');

    let bookArray = JSON.parse(localStorage.getItem("allBooks"));
    if(bookArray == null) bookArray = [];

    let catArr = Array.prototype.slice.call(categories);
    let categoryItems = document.getElementsByClassName('category_count');
    let counter = document.getElementById('total');

    counter.innerText = `Total: ${bookArray.length}`;

    for (let el of categoryItems) { 

        catArr.map(cat => {
        
            var count = 0;
    
            bookArray.filter(book => {
                if(book.category === cat.innerText) {
                    count++

                    if(el.dataset.name === book.category) {
                        el.innerText = `${cat.innerText}: ${count}`
                    }
                } else {
                    return
                }
            })
        })   
    }     
}
