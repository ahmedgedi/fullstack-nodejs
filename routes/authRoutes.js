const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/api/logout', (req, res) => {
        // passport attaches a couple of other functions to the req object
        req.logout(); // this kills the user cookie and logs out the user
        res.send(req.user)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}