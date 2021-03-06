const express = require('express');
const userRoutes = require('./server/user/user.route');
const authRoutes = require('./server/auth/auth.route');
const postRoutes = require('./server/post/post.route');
const mailRoutes = require('./server/mail/mail.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);


// mount posts routes at /post
router.use('/post', postRoutes);



// mount mail routes at /mail
router.use('/mail', mailRoutes);

// ui tests

// trending 
router.get('/', (req, res) =>
  res.sendfile(__dirname +  '/public/home.html')
);


module.exports = router;
