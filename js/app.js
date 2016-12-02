
// Enemies our player must avoid
var Enemy = function(yPos, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = yPos;
    this.speed = speed;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed*dt;
    
    if (this.x > 680) this.x = 0;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 296;
};

Player.prototype.update = function() {
    this.render();
}

Player.prototype.handleInput = function(keyCode) {
    var dx = 0, dy = 0;
    switch(keyCode) {
        case "left":
            dx = -101;
            break;
        case "up":
            dy = -83;
            if (this.y <= 50) alert("YOU WON!!!");
            break;
        case "right":
            dx = 101;
            break;
        case "down":
            dy = 83;
            break;
        default:
            break;
    }
    
    if (this.x + dx >= 0 && this.x + dx < 495) this.x = this.x + dx;
    if (this.y + dy >= -3 && this.y + dy <= 430) this.y = this.y + dy;
}

Player.prototype.render = Enemy.prototype.render;
Player.prototype.constructor = Player;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(60, 200), new Enemy(140, 300), new Enemy(220, 350), new Enemy(60, 250), new Enemy(140, 400)];
player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
