function randBetween(min, max) {
    return (min + Math.ceil((max - min + 1) * Math.random()) - 1);
}

re.ready(function() {
    re.sys.init(re.canvas).start();
    re.scene('load').enter();
});
