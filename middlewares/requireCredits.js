module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(418).send({error: 'Not enough credits'});
    }

    next();
}