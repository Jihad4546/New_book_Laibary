
import React from 'react';
import BookCard from './BookCard';

const Book = async () => {
    const res = await fetch('https://online-book-borrowing-platform-three.vercel.app/data.json' , {cache:'no-store'});
    const books = await res.json();

    const bookShortData = books.slice(0-4);


    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-4xl my-10'>Books Data</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {bookShortData.map((book) => <BookCard book={book} key={book.id}></BookCard>
                   
                )}
            </div>
        </div>
    );
};

export default Book;