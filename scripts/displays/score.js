re.c('score')
    .requires('text')
    .defaults({'money': 0})
    .defines({
        'addMoney': function(amount) {
            this.money += amount;
            re.score = this.money;
            this.text.attr('text', 'Money: €' + this.money);
        }
    })
    .init(function() {
        this.text = re.e('text').attr({
            'font': '15px sans-serif',
            'screen': null,
            'posX': 155,
            'posY': 5
        });
    });
