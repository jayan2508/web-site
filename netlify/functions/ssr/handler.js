const { createHandler } = require('@netlify/angular-runtime');
const server = require('./ssr.js');

exports.handler = createHandler(server.reqHandler);
