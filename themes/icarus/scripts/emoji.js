const logger = require('hexo-log')();

module.exports = hexo => {
    logger.info('=== Registering custom tag function of emoji ===');
    hexo.extend.tag.register('emoji', function(args){
        var emoji_path = args[0];
        if (emoji_path.indexOf('.') <= 0) {
            emoji_path = emoji_path + '.png'
        }
        return '<img class="not-gallery-item" src="/emoji/' + emoji_path + '" style="pointer-events:none;cursor:default;">';
    });
};
