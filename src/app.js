require('dotenv').config()
const WPAPI = require( 'wpapi' );

process.on('uncaughtException', err =>
  console.error('uncaught exception: ', err))
process.on('unhandledRejection', (reason, p) =>
console.error('unhandled rejection: ', reason, p))

const wp = new WPAPI({
    endpoint: process.env.WP_BLOG_URL,
    username: process.env.WP_BLOG_USER,
    password: process.env.WP_BLOG_PWD
})

wp.posts().then(function( data ) {
    console.log(data)
}).catch(function( err ) {
    console.log(err)
})