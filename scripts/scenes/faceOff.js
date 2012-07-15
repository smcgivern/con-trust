re.scene('faceOff')
    .enter(function() {
        re('draw').dispose();
        re.e('score').addMoney(re.score);
        re.e('conTrust').setup(re.currentLevel.index);
        re.screen.pos(-220, 0);
    });
