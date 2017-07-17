import Handler from './handler';

const TextureHandler = {
    get objectType() {
        return "texturehandler"
    }
};

require('./common').mix(TextureHandler, Handler);

module.exports = TextureHandler;
