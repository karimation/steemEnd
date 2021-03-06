const express = require('express');
const homeCtrl = require('./post.controller');
const expressJwt = require('express-jwt');
const config = require('../../config/config');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/trending')
    /** GET /api/home - Get most trending posts */
    .get(homeCtrl.getTrending)


router.route('/new')
    /** GET /api/home/:userId - Get most trending posts */
    .get(homeCtrl.getNew)


router.route('/hot')
    /** GET /api/home/:userId - Get latest posts liked by specific user */
    .get(homeCtrl.getHot)

router.route('/addPost')
    .post(expressJwt({ secret: config.jwtSecret }), homeCtrl.addPost)

router.route('/like')
    .post(expressJwt({ secret: config.jwtSecret }), homeCtrl.like)
module.exports = router;
