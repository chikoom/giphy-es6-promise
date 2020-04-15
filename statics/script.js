const randomWordURL = "https://random-word-api.herokuapp.com/word?number=1";
const giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=DKiA3kL5riYRm73jOgdluRNehaCQlaex&tag=";
var startWord="Hello World";


function setup(){
	fetch(randomWordURL)
	.then(response => response.json())
	.then(json => {
		startWord = json[0].toUpperCase();
		let title = document.getElementsByClassName('title')[0];
		title.innerHTML = startWord;
		return fetchGiphyImage(startWord);
	})
	.then(response => response.json())
	.then(json => {
		let bgimgURL = json.data.images['fixed_height'].url;
		let bgimg = document.getElementsByClassName('bgimg')[0];
		bgimg.style.backgroundImage = `url('${bgimgURL}')`;
	})
	.catch(err => {
		console.log(err)
		setup();
	});
}

setup();


function fetchGiphyImage(rendomWord){
	return fetch(giphyURL + rendomWord);
}