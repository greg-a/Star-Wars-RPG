var characters = [ 
    kylo = {
        name: "Kylo Ren",
        nameBox: $("<div class='name-box'</div>"),
        imageBox: $("<div class='imagebox'></div>"),
        pic: $("<img src='assets/images/kylo-ren.jpg' alt='Kylo Ren' id='kylo-pic' class='character-button'>"),
        healthDisplay: $("<div class='image-textbox' id='kylo-ren'></div>"),
        healthPoints: 150,
        attackPoints: 10,
        counterAttack: 20
    },
    rey = {
        name: "Rey",
        nameBox: $("<div class='name-box'</div>"),
        imageBox: $("<div class='imagebox'></div>"),
        pic: $("<img src='assets/images/rey.jpg' alt='Rey' id='rey-pic' class='character-button'>"),
        healthDisplay: $("<div class='image-textbox' id='rey'></div>"),
        healthPoints: 105,
        attackPoints: 10,
        counterAttack: 20
    },
    finn = {
        name: "Finn",
        nameBox: $("<div class='name-box'</div>"),
        imageBox: $("<div class='imagebox'></div>"),
        pic: $("<img src='assets/images/finn.jpg' alt='Finn' id='finn-pic' class='character-button'>"),
        healthDisplay: $("<div class='image-textbox' id='finn'></div>"),
        healthPoints: 101,
        attackPoints: 10,
        counterAttack: 20
    },
    babyYoda = {
        name: "Baby Yoda",
        nameBox: $("<div class='name-box'</div>"),
        imageBox: $("<div class='imagebox'></div>"),
        pic: $("<img src='assets/images/baby-yoda.jpg' alt='Baby Yoda' id='yoda-pic' class='character-button'>"),
        healthDisplay: $("<div class='image-textbox' id='baby-yoda'></div>"),
        healthPoints: 102,
        attackPoints: 10,
        counterAttack: 20
    }
]

var yourCharacter;
var yourEnemies = [];
var defender;
var defeatedEnemies = [];

resetCharacters();

function resetCharacters() {    
    for (var i = 0; i < characters.length; i++) {
        characters[i].nameBox.text(characters[i].name);
        characters[i].healthDisplay.text("Health: " + characters[i].healthPoints);
        $(".pick-character").append(characters[i].imageBox);
        characters[i].imageBox.append(characters[i].healthDisplay);
        characters[i].imageBox.append(characters[i].nameBox);
        characters[i].imageBox.append(characters[i].pic);
    }
}

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
    else if (defender == null && this.alt !== yourCharacter.name) {
        for (var i = 0; i < characters.length; i++) {
            if (this.alt == characters[i].name) {
                defender = characters[i];
                $(".defender-section").append(characters[i].imageBox);
                $(characters[i].imageBox).append(characters[i].healthDisplay);
                $(characters[i].imageBox).append(characters[i].pic);
                $(".fight-section").empty();
                $(".fight-section").append("<button class='btn btn-danger' id='attack-button'>Attack</button>");
            }
        }   
    }

    $("#attack-button").on("click", function() {
        if (yourCharacter.healthPoints > 0 && defender.healthPoints > 0) {

            yourCharacter.healthPoints = yourCharacter.healthPoints - defender.counterAttack;

            defender.healthPoints = defender.healthPoints - yourCharacter.attackPoints;

            yourCharacter.healthDisplay.text("Health: " + yourCharacter.healthPoints);

            defender.healthDisplay.text("Health: " + defender.healthPoints);
            
            $(".attack-results").text("You attacked " + defender.name + " for " + yourCharacter.attackPoints + " damage ");
            $(".attack-results2").text(defender.name + " attacked you back for " + defender.counterAttack + " damage");

            yourCharacter.attackPoints += 6;
            
        }
        else if (defender.healthPoints <= 0 && yourCharacter.healthPoints > 0 && yourEnemies !== defeatedEnemies) {        
            $(".defender-section").empty();
            $(".attack-results").text("You defeated " + defender.name);
            $(".attack-results2").empty();
            defeatedEnemies += defender;
            defender = null;
            $(".fight-section").empty();
            $(".fight-section").append("<button class='btn btn-danger' id='attack-button' disabled>Attack</button>");
        }
        else if (defender.healthPoints <= 0 && yourCharacter.healthPoints > 0 && yourEnemies == defeatedEnemies) {
            $(".defender-section").empty();
            $(".attack-results").text("You defeated all your enemies!");
            $(".attack-results2").append("<a class='btn btn-secondary' href='index.html'>Reset</a>");
        }  
        else if (yourCharacter.healthPoints <= 0) {
            $(".attack-results").text("You have been defeated by " + defender.name);
            $(".attack-results2").empty();
            $(".attack-results2").append("<a class='btn btn-secondary' href='index.html'>Reset</a>");
        }    
    })

})




