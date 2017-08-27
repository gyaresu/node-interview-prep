// return the promise and handle the error in the top level code
function deleteCat (cadID) {
  return database.delete('cats', catId) // neither success or failure. it's a promise of one
}

function deleteButtonClickHandler (e) {
  const cadId = e.target.data['cat-id']
  deleteCat(catId)
    .then(() => removeItemElementFromPage(catId))
    .catch(err =>
    showMessageDialog(
      'item' + getCatame(catId) + ' was not deleted'))
}

// the errors are just logged rather than returned.
function deleteCat (cadID) {
  database
    .delete('cats', catId) // neither success or failure. it's a promise of one
    .then(() =>
      console.log('Cat deleted'))
    .catch(err =>
      console.log(('Error deleting cat', err))) // "crash reporting"
}
