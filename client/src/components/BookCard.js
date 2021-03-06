import React from 'react'

function BookCard({book, }) {

    const {title, description, pageCount}  = book.volumeInfo

  return (
    <>

    <div className="bookCard">
    { book.volumeInfo.imageLinks === undefined
        ? <span>undefined image links</span>
        :<div className="bookImgContainerLarger"><img src={book.volumeInfo.imageLinks.thumbnail} alt={title} className="bookImgLarger"/></div>}
    </div>
    <button>
    </button>
    </>
  )
}

export default BookCard
