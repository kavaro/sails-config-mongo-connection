/**
 * Created by karl on 24/08/14.
 */

module.exports = function(config) {
    return config.plugin('connections', {
        modules: 'sails-mongo',
        configs: {
            development: {
                mongo: {
                    adapter: 'sails-mongo',
                    host: 'localhost',
                    port: 27017
                }
            }
        }
    });
};