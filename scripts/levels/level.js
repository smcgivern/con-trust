re.c('level')
    .requires('automap')
    .defines({
        'setup': function() {
            re.iso.sizeX = 30;
            re.iso.sizeY = 30;
            re.iso.sizeZ = 30;
            re.layer = {
                'npc': 1,
                'cursor': 2,
                'player': 3
            };

            for (var y = 0; y < this.map.length; y++) {
                for (var x = 0; x < this.map[0].length; x++) {
                    var e = re.e('isoimage');
                    var tile = this.map[y][x];

                    e.frame(tile);
                    e.iso(x, y);

                    this.automap(x, y, e);
                }
            }

            if (!re.faced[this.index]) { re.e('npc').addToLevel(this.index); }

            this.cursor = re.e('cursor')
                .attr('layer', re.layer.cursor);

            this.player = re.e('isoimage')
                .attr({
                    'id': 'player',
                    'frame': 99,
                    'layer': re.layer.player,
                    'place': re.place
                });

        },
        'tileHeight': function(x, y) {
            var tile = this.automap(x, y);

            if (!tile) { return -1; }

            return tile.isoHeight();
        },
        'canMoveTo': function(iso) {
            var targetHeight = this.tileHeight(iso.isoX, iso.isoY);

            return (targetHeight > -1 && targetHeight < 10);
        },
        'action': function(iso) {
            var tile = this.automap(iso.isoX, iso.isoY);

            if (!tile) { return -1; }

            return tile.action();
        }
    });
