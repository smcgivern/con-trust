re.scene('home')
    .enter(function(level, score) {
        level = level || 0;
        score = score || 200;

        re('draw').dispose();
        re.e('score').addMoney(score);
        re.currentLevel = re('level')[level];
        re.currentLevel.setup();
        re.screen.pos(-220, 0);
    });
