let t = russianCase;
let numOfSonets = t.length;
let numOfStrOfPoem = t[0].length;
let state = Array.apply(null, Array(numOfStrOfPoem));

function putSonet() {
	document.getElementById("sonet").innerHTML = getRandomSonet();
}
function prev(clicked) {
	ind = [].indexOf.call(clicked.parentElement.children, clicked);
	state[ind] += numOfSonets - 1;
	state[ind] %= numOfSonets;
	redraw();
}
function next(clicked) {
	ind = [].indexOf.call(clicked.parentElement.children, clicked);
	state[ind] += 1;
	state[ind] %= numOfSonets;
	redraw();
}
function choose(clicked) {
	i = [].indexOf.call(clicked.parentElement.children, clicked);
	state = state.map(function () {
		return i;
	})
	redraw();
}

function redraw() {
	let res = '';
	state.forEach(function(item, i) {
		res += '<p>' + t[item][i] + '</p>'
	})
	let poemNum = state.map(function (item) {
		return (item + 1) % 10;
	})
	//res = '<h1>' + poemNum.join('') + '</h1>' + res;
	document.getElementById("num").innerHTML = poemNum.join('');
	document.getElementById("sonet").innerHTML = res;

}
function getRandomState() {
	let m = 0;
	let num = 0;
	state = state.map(function () {
		m = Math.floor(Math.random()*(numOfSonets));
		return m;
	});
}
function getRandomSonet() {
	getRandomState();
	redraw();
}
function getRandomSonetOrig() {
	let m = Math.floor(Math.random()*(numOfSonets));
	let res = '<h1>' + (m + 1) + '</h1>';
	for(let i=0; i<14; i++) {
		res += '<p>' + t[m][i] + '</p>';
	}
	return res;
}