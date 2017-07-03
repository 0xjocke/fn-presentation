const book = {
       author: {
            name: ‘Author name”,
            otherBooksWritten: 2
            bookRecommendation: {
                name: "JS the good parts”,
                rating: 5
            }
        }
}

const newBook = {
    …book,
    author: {
        …book.author,
        bookRecommendation:{
            …book.author.bookRecommendation,
            rating: 4
        }

    }
}
