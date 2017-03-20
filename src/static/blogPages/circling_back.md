## Circling Back

As I noted in the initial content of this "blog page" I tend to get rid of examples that I have created that are getting a bit dated.  Once something becomes "old news"
I will generally remove the example. 

__I was asked to bring this one back.__  I had assumed that the "problem" addressed here was out dated primarily because support for IE8 is falling off.  What I am doing
here can be accomplished on "modern" browsers simply using CSS.  However, IE8 does not really support much of the CSS3 specification.

__The topic of this writing is creating those round "avatars" or thumbnail images that have gained popularity.__


If we are only supporting modern browers, for our purposes here these are browsers with substantial CSS3 support, then we only need an image and a VERY small amount of CSS.

*example 1 - Pure CSS solution* ( [example 1-  jsFiddle](http://jsfiddle.net/deanjennings/1uvbvdmp/1/) )

To support IE8 I am resorting to, of all things, canvas.  Although canvas is not supported by IE8, there is a "polyfill" ... flashcanvas.  If you inject this into your
HTML via a conditional SCRIPT tag you will be able to support at least basic canvas ... and a circle is about as basic as it gets.  Just use the developer tools in any
modern browser and you'll be able to see the code ... it's all basically in-line.

example 2 - Canvas solution ( [example 2](demos/cirImg.html) )

So, there is a way to get those little circular avatars in IE8.  But, if you are opposed to using Flash ... well, square it is, then!

(Oh yeah ... you can drag/drop the canvas avatars, too.  I had a client using them to build a storyboard and this worked just fine for them ... using jQuery, I think.)
