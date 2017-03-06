// product constructor notation 
function Game(name, price, sub, expansions, image) {
	this.name = name
	this.price = price
	this.sub = sub
	this.expansions = expansions
	this.image = image
}

// create game products for the product constructor
var wow = new Game("World of Warcraft", 39.99, 14.99, 6, "img/wow.png");
var gw2 = new Game("Guild Wars 2", 49.99, "none", 1, "img/gw2.jpg");
var eso = new Game("The Elder Scrolls Online", 59.99, "none", 1, "img/ESO.jpg");
var poe = new Game("Path of Exile", "free to play", "none", 2,  "img/poe.jpg");
var ff = new Game("Final Fantasy XIV: Heavensward", 39.99, 14.99, 2,  "img/ff14.jpg");
var star = new Game("Star Wars: The Old Republic", 59.99, 14.99, 3,  "img/starwars.jpg");

// new array that games get pushed into
var gameArray = new Array

// add games to new array
gameArray.push(wow, gw2, eso, poe, ff, star);

// loop through the games array
for(var i = 0; i < gameArray.length; i++) {
	// create new elements for each game
	var newGame = document.createElement("div");
	var newDiv = document.createElement("div");
	var nameH2 = document.createElement("h2");
	var priceH4 = document.createElement("h4");
	var subH4 = document.createElement("h4");
	var expH4 = document.createElement("h4");
	var btn = document.createElement("button");
	var image = document.createElement("img");
	// add the text for each element to each game product
	nameH2.textContent = gameArray[i].name;
	priceH4.textContent = "Price: " + gameArray[i].price;
	subH4.textContent = "Subscription fee: " + gameArray[i].sub;
	expH4.textContent = "Expansion packs: " + gameArray[i].expansions;
	btn.textContent = "Buy Now";
	
	// update the source for each game in the array
	image.src = gameArray[i].image;


	// give classes to elements once they are created
	nameH2.className = "gameTitle"
	image.className = "img-responsive";
	btn.className = "btn btn-lg btn-primary";
	newGame.className = "col-sm-4";
	newDiv.className = "newGame" + [i] + " thumbnail";


	// add the elements for each new div
	newDiv.appendChild(nameH2);
	newDiv.appendChild(image);
	newDiv.appendChild(priceH4);
	newDiv.appendChild(subH4);
	newDiv.appendChild(expH4);
	newDiv.appendChild(btn);
	// add newDiv to newGame divs
	newGame.appendChild(newDiv);
	// add the divs to the element with the ID of "games"
	document.getElementById('games').appendChild(newGame);
}



