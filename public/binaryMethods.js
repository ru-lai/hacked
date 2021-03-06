Hacked.Binary.calculateInt = function (spriteArray) {
	const binValArr = [];

	spriteArray.map((binSprite) => {
		binValArr.push({ pos: binSprite.worldPosition.x, val: binSprite.binaryVal });
	});

	binValArr.sort((a, b) => {
		return a.pos > b.pos;
	});

	const binSum = binValArr.reduce((binSum, binObj) => {
		return binSum + binObj.val;
	}, '');
	
	return parseInt(binSum, 2);
}

Hacked.Binary.checkOverlappingBinaryBlocks = function (binaryGroup, landingSprite) {
	const overlappingBlocks = [];
	binaryGroup.map((binaryBlock) => {
		if (Hacked.checkOverlap(binaryBlock, landingSprite)) {
			overlappingBlocks.push(binaryBlock);
		}
	});

	return overlappingBlocks;
}

Hacked.Binary.addBinaryToGroup = function (group, locX, locY, binaryVal) {
	const binary = group.create(locX, locY, `binary-${binaryVal.toString()}`);
	binary.binaryVal = binaryVal.toString();
	return binary;
}

Hacked.Binary.addBinaries = function (group, digits) {
	let locX = 100;
	for (let binDig of digits) {
		Hacked.Binary.addBinaryToGroup(group, locX, 400, parseInt(binDig));
		locX += 100;
	}
}

Hacked.Binary.addPlacers = function (group, startLocX, startLocY, digits) {
	let locX = startLocX;
	const locY = startLocY;
	for (let digit of digits) {
		group.create(locX, locY, 'placer');
		locX += 85;
	}

	return;
}

Hacked.Binary.calculateBinaryRange = function (timesPlayed) {
	var binaryRange;
	switch(timesPlayed) {
		case 0:
			binaryRange = 10;
			return binaryRange;
		case 1:
			binaryRange = 256;
			return binaryRange;
		case 2:
			binaryRange = 512;
			return binaryRange;
		case 3:
		default:
			binaryRange = 1024;
			return binaryRange;
	}
}
