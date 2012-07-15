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
        'moveToScene': function(scene, offset, position) {
            var player = re('#player')[0];

            if (position) { player.place.apply(player, position); }

            re.scene(scene).enter(offset);
        },
        'moveTo': function(iso) {
            if (re.currentLevel.canMoveTo(iso)) {
                switch (re.currentLevel.action(iso)) {
                case 1:
                    this.moveToScene('home', 1, [0, 0]);
                    break;
                case 2:
                    this.moveToScene('home', -1, [0, 0]);
                    break;
                case 9:
                    this.moveToScene('faceOff', 0, [iso.isoX, iso.isoY]);
                    break;
                default:
                    re('#player')[0].place(iso.isoX, iso.isoY);
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
