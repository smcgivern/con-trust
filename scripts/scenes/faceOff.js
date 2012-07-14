re.scene('faceOff')
    .enter(function(level, score) {
        re('draw').dispose();
        re.e('score').addMoney(score);
        re.e('conTrust').setup(level);
        re.screen.pos(-220, 0);
    });
