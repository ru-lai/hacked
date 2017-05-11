var Hacked = Hacked || {};

Hacked.Binary = function(game) {
	this.background = null;
}

Hacked.Binary.prototype = {
	preload: function() {
		this.game.load.image('gem', 'gem.png')
	},
	create: function() {
		this.gem = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'gem');
		this.game.physics.startSystem(Phaser.Physics.P2JS);


		this.game.physics.p2.enable(this.gem);

		this.cursors = this.game.input.keyboard.createCursorKeys();
	},
	update: function() {
		this.gem.body.setZeroVelocity();

		if (this.cursors.left.isDown) {
			this.gem.body.moveLeft(200);
		} else if (this.cursors.right.isDown) {
			this.gem.body.moveRight(200);
		} else if (this.cursors.up.isDown) {
			this.gem.body.moveUp(200);
		} else if (this.cursors.down.isDown) {
			this.gem.body.moveDown(200);
		}
	},
};
