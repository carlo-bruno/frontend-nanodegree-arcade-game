// Enemies our player must avoid
const Enemy = function(lane) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = lane;
    this.speed = 100 + Math.random() * 500;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt;
    
    if (this.x >= 600) {
        this.x = -100;
        this.speed = 100 + Math.random() * 500;
    }
    
    if (player.x < this.x + 75 && player.x + 75 > this.x &&
        player.y < this.y + 20 && player.y + 20 > this.y ) {
        player.x = 204;
        player.y = 404;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 204;
    this.y = 404;
}

Player.prototype.update = function() {
    if (this.y <= 0) { 
        setTimeout( function() {
                   player.x = 204;
                   player.y = 404;
                   }, 300);
    }
};

Player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

Player.prototype.handleInput = function (keyPress) {
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    }
    if (keyPress == 'right' && this.x < 404) {
        this.x += 102;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    }
    if (keyPress == 'down' && this.y < 404) {
        this.y += 83;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];
let enemyLanes = [60, 143, 226];
enemyLanes.forEach(function(lane) {
    enemy = new Enemy(lane);
    allEnemies.push(enemy);
});


let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
