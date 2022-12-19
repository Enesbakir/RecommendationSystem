const Movie = require('../models/Movie');

exports.getIndexPage= (req, res) => {
        console.log(req.session.user_ID)
        res.status(200).render('index',{_pageName:'index'});
};
exports.getLoginPage=(req,res)=>{
    res.status(200).render('login',{_pageName:'login'});
}

exports.getTvPage= (req, res) => {
    res.status(200).render('tv',{_pageName:'tv'});
};
exports.getCelebsPage= (req, res) => {
    res.status(200).render('celebs',{
        _pageName:'celebs'
    });
};
