var kylo = {
    name: "kylo-ren",
    pic: document.createElement("img"),
}

$(kylo.pic).addClass("character-button");
$(kylo.pic).attr("alt",kylo.name);
kylo.pic.src = "assets/images/kylo-ren.jpg";
$(".pick-character").append(kylo.pic);

var rey = {
    name: "rey-palpatine",
    pic: document.createElement("img")
}

$(rey.pic).addClass("character-button");
$(rey.pic).attr("alt",rey.name);
rey.pic.src = "assets/images/rey.jpg";
$(".pick-character").append(rey.pic);

var finn = {
    name: "finn-st",
    pic: document.createElement("img")
}

$(finn.pic).addClass("character-button");
$(finn.pic).attr("alt",finn.name);
finn.pic.src = "assets/images/finn.jpg";
$(".pick-character").append(finn.pic);

var babyYoda = {
    name: "baby-babyYoda",
    pic: document.createElement("img")
}

$(babyYoda.pic).addClass("character-button");
$(babyYoda.pic).attr("alt",babyYoda.name);
babyYoda.pic.src = "assets/images/baby-yoda.jpg";
$(".pick-character").append(babyYoda.pic);

var characters = [kylo,rey,finn,babyYoda];
var yourCharacter;


function createEnemies() {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].name !== yourCharacter) {
            // $(".defender-section").append(this);
            $(".enemy-section").append(characters[i].pic);
        }
    }
}


$(".character-button").on("click", function() {
    yourCharacter = this.alt;
    $(".your-character").append(this);  
})

$("#attack-button").on("click", function() {
    createEnemies();
    console.log(characters);
})




