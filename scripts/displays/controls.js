re.c('cursor')
    .requires('isoimage mouse')
    .defines({
        'frame': 90,
        'activate': function(x, y) {
            var iso = re.iso.toIso(x, y);

            this.moveTo(iso);
        },
        'hover': function(x, y) {
            var iso = re.iso.toIso(x, y);

            if (re.currentLevel.canMoveTo(iso)) {
                this.place(iso.isoX, iso.isoY);
                re.drawlist().sort();
            }
        },
        'moveTo': function(iso) {
            if (re.currentLevel.canMoveTo(iso)) {
                var player = re('#player')[0];
                var score = re('score')[0].money;

                switch (re.currentLevel.action(iso)) {
                case 1:
                    re.scene('home').enter(re.currentLevel.index + 1, score);
                    player.place(0, 0);
                    break;
                case 2:
                    re.scene('faceOff').enter(re.currentLevel.index, score);
                default:
                    player.place(iso.isoX, iso.isoY);
                }

                re.drawlist().sort();
            }
        }
    })
    .init(function() {
        this.on({
            'click': this.activate,
            'mousemove': this.hover
        });
    });
