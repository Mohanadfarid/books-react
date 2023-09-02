

const ShelfSelector = ({ book, HandelUpdateShelf ,AllBooks}) => {
  
  return (
    <div className="book-shelf-changer">
      <select onChange={(e)=>{HandelUpdateShelf(book,e.target.value)}} defaultValue={book.shelf || 'none'}>
  <option disabled>Move to...</option>
  <option value="currentlyReading">Currently Reading</option>
  <option value="wantToRead">Want to Read</option>
  <option value="read">Read</option>
  <option value="none">None</option>
</select>
    </div>
  );
};
export default ShelfSelector;
