const withPWA = require('next-pwa');

module.exports = withPWA({
    dest: 'public',
    mode: 'production',
    register: true,
    skipWaiting: true,

});