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

function getSonet(hash) {
	if (hash.length != numOfStrOfPoem + 1) {
		return
	}
	hash = hash.split('');
	hash.splice(0, 1);
	hash.splice(14);
	hash.forEach(function(x, i) {
		state[i] = (Number(x) + numOfSonets - 1) % 10 
	});
}

function whileload() {
	let strAddr = document.URL;
	let addr = new URL(strAddr);
	let hash = addr.hash;
	console.log(addr);
	getRandomState();
	getSonet(hash);
	redraw();

}
function getRandomSonet() {
	getRandomState();
	redraw();
}
