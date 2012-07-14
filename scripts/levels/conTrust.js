re.c('conTrust')
    .requires('text mouse')
    .defines({
        'level': null,
        'characters': [
            {
                'name': 'Honest John',
                'honesty': 5,
                'savvy': 1,
                'risk': randBetween(50, 100),
                'reward': randBetween(50, 100)
            },
            {
                'name': 'Steady Eddie',
                'honesty': 4,
                'savvy': 2,
                'risk': randBetween(50, 100),
                'reward': randBetween(50, 100)
            },
            {
                'name': 'Regular Joe',
                'honesty': 3,
                'savvy': 3,
                'risk': randBetween(100, 200),
                'reward': randBetween(100, 200)
            },
            {
                'name': 'Diamond Geezer',
                'honesty': 2,
                'savvy': 4,
                'risk': randBetween(200, 300),
                'reward': randBetween(200, 300)
            },
            {
                'name': 'Tricky Dicky',
                'honesty': 1,
                'savvy': 5,
                'risk': randBetween(300, 500),
                'reward': randBetween(300, 500)
            }
        ],
        'stories': [
            'I\'ll give you €REWARD if you deliver this €RISK to my brother',
            'This lottery ticket\'s worth €REWARD and you can buy it for €RISK',
            'I\'m lost, give me €RISK and I\'ll send €REWARD when I get home',
            'The mountains are full of gold. €RISK will earn you €REWARD',
            'The fix is in: put €RISK on number five for a guaranteed €REWARD!',
            'These speakers will go for €REWARD, just €RISK for the lot',
            'My father\'s ransom is €RISK; he\'ll pay €REWARD if you free him',
            'I have €REWARD in coins but I can\'t change them - €RISK to you'
        ],
        'chooseStory': function(risk, reward) {
            return this.stories[randBetween(0, this.stories.length - 1)]
                .replace('RISK', risk)
                .replace('REWARD', reward);
        },
        'title': function(text) {
            re.e('text').attr({
                'text': text,
                'font': '40px sans-serif',
                'posX': -200
                });

            return this;
        },
        'description': function(text) {
            re.e('text').attr({
                'text': text,
                'font': '15px sans-serif',
                'posX': -200,
                'posY': 50
                });

            return this;
        },
        'story': function(text) {
            re.e('text').attr({
                'text': text,
                'font': '15px sans-serif',
                'posX': -200,
                'posY': 75
                });

            return this;
        },
        'conButton': function() {
            re.e('rect').attr({
                'color': '#a00',
                'posY': 130,
                'posX': -220,
                'sizeX': 230,
                'sizeY': 120
            });

            re.e('text').attr({
                'text': 'Con',
                'font': '50px sans-serif',
                'textColor': '#fff',
                'posX': -200,
                'posY': 150
                });

            re.e('text').attr({
                'text': '(Try to cheat them)',
                'font': '15px sans-serif',
                'textColor': '#fff',
                'posX': -200,
                'posY': 210
                });

            return this;
        },
        'trustButton': function() {
            re.e('rect').attr({
                'color': '#0c0',
                'posY': 130,
                'posX': 30,
                'sizeX': 230,
                'sizeY': 120
            });


            re.e('text').attr({
                'text': 'Trust',
                'font': '50px sans-serif',
                'posX': 50,
                'posY': 150
                });

            re.e('text').attr({
                'text': '(Take the deal as it is)',
                'font': '15px sans-serif',
                'posX': 50,
                'posY': 210
                });

            return this;
        },
        'setup': function(level) {
            if (typeof level === 'undefined') {
                level = this.level;
            } else {
                this.level = level;
            }

            var character = this.characters[level];

            this
                .title(character.name)
                .description('Honesty: ' + character.honesty + '/5, ' +
                             'savvy: ' + character.savvy + '/5')
                .story(this.chooseStory(character.risk, character.reward))
                .conButton()
                .trustButton();
        },
        'action': function(type) {
            var character = this.characters[this.level];

            if (type === 'con') {
                console.log('The con was discovered! You\'re out €' + character.risk);
            }
        },
        'tryAction': function(x, y) {
            if (y >= 130 && y <= 250) {
                if (x >= -220 && x <= 10) {
                    this.action('con');
                } else if (x >= 30 && x <= 260) {
                    this.action('trust');
                }
            }
        }
    })
    .init(function() {
        this.on({
            'click': this.tryAction
        });
    });
