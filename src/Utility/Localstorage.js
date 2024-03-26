const getStoredReadBook = () =>{
    const storedReadBook =  localStorage.getItem('read-book');
    if(storedReadBook){
        return  JSON.parse(storedReadBook);
    }
    return []
}


const saveReadBook = bookId =>{
    const storedReadBooks = getStoredReadBook();
    const exist = storedReadBooks.find(item=> item === bookId)
    if(!exist){
        storedReadBooks.push(bookId)
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
    }
} 

export {saveReadBook, getStoredReadBook}