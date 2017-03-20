## Multiple Views of a Single Image Copy


__This is another one that I cobbled together in response to a "how to" question.__  In a web based application that was actually created by the company for which I work,
it was noted that, when the user hovered over certain images, those images would change from black & white to color.  A commment was made that it was probably a "sprite" with
both color and black and white versions of the images.  On close imspection I noted that these were actually not sprites but were held in canvas elements.  I thought that
this was interesting and, when I made a comment that there were not multiple images, I was asked "how".

__Never to be one to just write the most simplistic example, I wrote a little utility that will use any image change certain properties of the image in response to a "hover"
event.__


The utility, called "Hloov" (Hmong for "change"), will allow you to specifiy different types of image changes.  You can make it simply change from black & white to color,
change size, pop out over other images/text ... or combine these.

I put together a little example using images of album covers from my favorite band, Pink Floyd.  Check it out using the link in the example below.  Feel free to use
the browser developer tools to check out the code and feel free to grab/use the utility.  Even if you don't actually use it it's not a bad thing to know how to do.

*example - Image Changes using Hover Event* ( [example](demos/floydCovers) )

This has no dependencies such as jQuery.  As for IE8 ... well, FlashCanvas won't support some of the things that this does so it won't work in older versions of IE ...
so keep that in mind.  If anyone works out an IE8 solution I'd be interested to hear about it but I am not going to put any time into it as this example more or less
answered the original "how" question.
