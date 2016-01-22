/**
 * Created by Ellen Seon on 2016. 1. 3..
 */

var express = require('express');
var Twitter = require('twitter');
var router = express.Router();

var client = new Twitter({
    consumer_key: 'GfOn9963UaT5Uj1tM280hucTp',
    consumer_secret: 'KEGna0uNGeuDzPKS8cbRA7w8jjmfdXU4fJWUSHPDnMXb4oyWop',
    access_token_key: '2324761339-EDyMnwYpDxhZrteQCgHVQP9bFIHEliffzu8AsXw',
    access_token_secret: 'mrwxxIbfvVIsaMzfD1R4Tdo4moaTmFRb3wF5xn8Y7j6Ot'
});

var params = {screen_name: 'TanisGrandison'};

client.get('statuses/user_timeline', params, function(error, tweets, h) {
    if (!error) {
        //for (var tweet in tweets) {
        for (var i = 0 ; i < tweets.length ; i++)
            console.log(tweets[i].text + ' ' + tweets[i].created_at);
        }
    //}
});

//client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
//    stream.on('data', function (tweet) {
//        console.log(tweet.text);
//    });
//
//    stream.on('error', function (error) {
//        console.log(error);
//    });
//});

module.exports = router;
