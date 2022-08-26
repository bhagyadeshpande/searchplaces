import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

let searchInput = document.getElementById('searchbar');
searchInput.addEventListener('keyup',function(){
  axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})

async function loadTable(){
  const tableHead = document.querySelector("th");
  const tableBody = document.querySelector("td");
}
