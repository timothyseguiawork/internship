console.log(openStations);
console.log(wishlist);

// Should render all open stations to the page one by one
// Should render the last items in the array first
function addStations(stations) {
  for (let i = stations.length - 1; i >=0 ; i--) {
    addStationElement(stations[i]);
  }
}
addStations(openStations);

// should render all wishlist items to the page one at a time
function addWishlistItems(wishlist) {
  for (let i = 0; i < wishlist.length; i++) {
    // use addWishlistElement to add a single wishlist item to the page
    addWishlistElement(wishlist[i]);
  }
}
addWishlistItems(wishlist);

// should return an array of station strings that include the user's query
// this will automatically be called when a user clicks the search button
function filterByCity(query, stations) {
  // new array for filtered matches
  let matches = [];
  // loop through our stations
  for (let i = 0; i < stations.length; i++) {
    // check to see if current station contains the users query
    if (stations[i].toLowerCase().includes(query.toLowerCase())) {
      // add the station to the filtered matches
      matches.push(stations[i]);
    }
  }
  // return the filtered matches
  return matches;
}

