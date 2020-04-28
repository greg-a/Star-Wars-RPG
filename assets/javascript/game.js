var kylo = {
    name: "kylo-ren",
    imageBox: $("<div class='imagebox'></div>"),
    pic: $("<img src='assets/images/kylo-ren.jpg' alt='kylo-ren' id='kylo-pic' class='character-button'>"),
    healthDisplay: $("<div class='image-textbox' id='kylo-ren'></div>"),
    healthPoints: 100,
    attackPoints: 10,
    counterAttack: 20
}

$(kylo.healthDisplay).text("Health: " + kylo.healthPoints);
$(".pick-character").append(kylo.imageBox);
kylo.imageBox.append(kylo.healthDisplay);
kylo.imageBox.append(kylo.pic);



var rey = {
    name: "rey",
    imageBox: $("<div class='imagebox'></div>"),
    pic: $("<img src='assets/images/rey.jpg' alt='rey' id='rey-pic' class='character-button'>"),
    healthDisplay: $("<div class='image-textbox' id='rey'></div>"),
    healthPoints: 105,
    attackPoints: 10,
    counterAttack: 20
}

$(rey.healthDisplay).text("Health: " + rey.healthPoints);
$(".pick-character").append(rey.imageBox);
rey.imageBox.append(rey.healthDisplay);
rey.imageBox.append(rey.pic);

var finn = {
    name: "finn",
    imageBox: $("<div class='imagebox'></div>"),
    pic: $("<img src='assets/images/finn.jpg' alt='finn' id='finn-pic' class='character-button'>"),
    healthDisplay: $("<div class='image-textbox' id='finn'></div>"),
    healthPoints: 101,
    attackPoints: 10,
    counterAttack: 20
}

$(finn.healthDisplay).text("Health: " + finn.healthPoints);
$(".pick-character").append(finn.imageBox);
finn.imageBox.append(finn.healthDisplay);
finn.imageBox.append(finn.pic);

var babyYoda = {
    name: "baby-yoda",
    imageBox: $("<div class='imagebox'></div>"),
    pic: $("<img src='assets/images/baby-yoda.jpg' alt='baby-yoda' id='yoda-pic' class='character-button'>"),
    healthDisplay: $("<div class='image-textbox' id='baby-yoda'></div>"),
    healthPoints: 102,
    attackPoints: 10,
    counterAttack: 20
}

$(babyYoda.healthDisplay).text("Health: " + babyYoda.healthPoints);
$(".pick-character").append(babyYoda.imageBox);
babyYoda.imageBox.append(babyYoda.healthDisplay);
babyYoda.imageBox.append(babyYoda.pic);

var characters = [kylo,rey,finn,babyYoda];
var yourCharacter;
var yourEnemies = [];
var defender;

$(".character-button").on("click", function() {
    if (yourCharacter == null) {
        for (var i = 0; i < characters.length; i++) {
            if (this.alt == characters[i].name) {
                yourCharacter = characters[i];
                $(".your-character").append(characters[i].imageBox);
                $(characters[i].imageBox).append(characters[i].healthDisplay);
                $(characters[i].imageBox).append(characters[i].pic);
            }
            else {
                yourEnemies += characters[i];
                $(".enemies-section").append(characters[i].imageBox);
                $(characters[i].imageBox).append(characters[i].healthDisplay);
                $(characters[i].imageBox).append(characters[i].pic);
            }
        }
    }
    else if (defender == null && this.alt !== yourCharacter) {
        for (var i = 0; i < characters.length; i++) {
            if (this.alt == characters[i].name) {
                defender = characters[i];
                $(".defender-section").append(characters[i].imageBox);
                $(characters[i].imageBox).append(characters[i].healthDisplay);
                $(characters[i].imageBox).append(characters[i].pic);
            }
        }   
    }
})

$("#attack-button").on("click", function() {
    for (var i = 0; i < characters.length; i++) {
        
    }
})





