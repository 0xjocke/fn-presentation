import R from 'ramda'

const book = {
  author: {
    name: 'Author name',
    otherBooksWritten: 2,
    bookRecommendation: {
      name: 'JS the good parts',
      rating: 5,
    },
  },
}

const ratingLens = R.lensPath([
  'author',
  'bookRecommendation',
  'rating',
])

const updatedBook = R.set(
  ratingLens,
  1,
  book
)

R.view(ratingLens, book) // 5
R.view(ratingLens, updatedBook) // 6

R.view(ratingLens, {}) // undefined
R.view(ratingLens, undefined) // undefined
