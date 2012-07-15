re.c('npc')
    .requires('isoimage')
    .defines({
        'addToLevel': function(level) {
            var place, rand, map = re('level')[level].map;

            while (!place) {
                rand = [randBetween(0, 7), randBetween(0, 7)];

                if (map[rand[1]][rand[0]] < 5 &&
                    rand[0] !== 0 && rand[1] !== 0) {

                    place = rand;
                }
            }

            this.attr({
                'id': 'npc' + level,
                'frame': 30 + level,
                'place': place,
                'layer': re.layer.npc
            });
        }
    });
