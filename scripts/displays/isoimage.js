re.c('isoimage')
    .requires('iso sprite sprites.png')
    .defines({
        'sizeX': 43,
        'sizeY': 35,
        'layer': 0,
        'isoHeight': function() {
            return (parseInt((this.frameX || 0) / 5) * 10);
        },
        'action': function() {
            var that = this;

            var npcs = re('npc')
                .filter(function(npc) {
                    if (npc.isoX() === that.isoX() &&
                       npc.isoY() === that.isoY()) {

                        return true;
                    }
                });

            if (npcs.length > 0) { return 2; }

            return (this.frameY || 0);
        },
        'place': function(x, y) {
            var height = re.currentLevel.tileHeight(x, y);

            this.iso(x, y, height / re.iso.sizeZ);
        },
        'depth': function() {
            return this.posY + this.layer + this.posZ;
        }
    })
    .init(function() {
        this.regY = this.sizeY - re.iso.sizeY;
    });
