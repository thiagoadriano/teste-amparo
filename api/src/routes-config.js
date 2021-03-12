const express = require('express');
const router = express.Router();

const routes = [
    {
        path: '/',
        controller: () => {}
    }
]

module.exports = (app) => {
    for(const route of routes) {
        router.use(route.path, route.controller);
    }
}
