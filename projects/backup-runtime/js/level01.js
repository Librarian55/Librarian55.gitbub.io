var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
                ]
        }
       
       
       
        //#9 dazed and confused. are the sawblades I made above used as the data for the array?
        //for (var i= 0; i<=levelData.length + 1; i++) { 
        //var gameItem = levelData.gameItems
    // Create a sawblade using the .x and .y property of each game item object





        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        
        
        // var enemy =  game.createGameItem('enemy',25);
        // var redSquare = draw.rect(50,50,'red');
        // redSquare.x = -25;
        // redSquare.y = -25;
        // enemy.addChild(redSquare);
        // enemy.x = 400;
        // enemy.y = groundY-50;
        // game.addGameItem(enemy)
        
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);  
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -30;
            obstacleImage.y = -30;
        }
        createSawBlade(300, groundY-100);
        createSawBlade(900, groundY-100);
        createSawBlade(1200, groundY-100);
        
        function createBadguy(x,y){
            var hitZoneSize =25;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            
            game.addGameItem(myObstacle);  
            var obstacleImage = draw.bitmap('img/badguy.jpg');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createBadguy(600, groundY- 20);
        createBadguy(900, groundY - 20);
        createBadguy(1200, groundY - 20);
        
        function createEnemy(x,y) {
            var enemy = game.createGameItem("enemy",30)
            enemy.x = x;
            enemy.y = y;
            enemy.velocityx = -2.0;
        
            var redSquare = draw.bitmap('img/badGuy2.jpg');
            redSquare.x = -39;
            redSquare.y = -40;
            
            enemy.addChild(redSquare);
            
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function(){
                game.changeIntegrity(-20);
                enemy.fadeOut();
            };
            
            enemy.onProjectileCollision = function(){
                game.increaseScore(50);
                enemy.fadeOut();
            };
        };
        function createReward (x, y) {
            var reward = game.createGameItem("reward",22);
            reward.x = x;
            reward.y = y;
            reward.velocityx = 2;
            
            var blueSquare = draw.bitmap('img/reward.jpg');
            blueSquare.x = 20;
            blueSquare,y = 20;
            reward.addChild(blueSquare);
            
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function(){
                game.increaseScore(25);
                game.changeIntegrity(-20);
                reward.fadeOut();
            }
        }
    }
}

        
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}