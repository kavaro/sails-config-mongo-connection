/**
 * Created by karl on 24/08/14.
 */

module.exports = function(config) {
    return config.plugin('connection', {
        modules: 'sails-mongo',
        configs: {
            development: {
                mongodb: {
                    adapter: 'sails-mongo',
                    host: 'localhost',
                    port: 27017
                }
            }
        }
    });
};