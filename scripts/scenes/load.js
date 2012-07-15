re.scene('load')
    .enter(function() {
        re.load(re.assets)
            .complete(function() {
                re.currentLevel = re('level')[0];
                re.score = 200;
                re.faced = {};
                re.place = [0, 0];
                re.scene('home').enter();
            });
    });
