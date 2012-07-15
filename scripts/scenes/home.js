re.scene('home')
    .enter(function(offset) {
        offset = offset || 0;
        re.currentLevel = re('level')[re.currentLevel.index + offset];

        re('draw').dispose();
        re.e('score').addMoney(re.score);
        re.currentLevel.setup();
        re.screen.pos(-220, 0);
    });
