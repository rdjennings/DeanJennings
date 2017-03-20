## Which Framework?

This is one of those writings that is done out of frustration.  I'm frustrated that after a dozen years of using "the latest and greatest" JavaScript libraries and frameworks I am still asked over and over questions like "why should I use framework X instead of my current framework Y".

My response generally begins with something like "__Why are you using framework Y?__"  The blank stares that I get in response used to amuse me.  Now they make me sad. __OR__ I listen to a diatribe about the latest, most modern, can do _anything_ and _everything_ that a JavaScript developer might ever want or need framework that just hit GIT.  I've even had developers, in a moment of pure honesty, tell me they needed to use a framework to keep current and ensure that their resume had the proper _buzz words_ in it.

I suppose that in some twisted way all of these are legitmate reasons to use a framework ... but are they __ _the reasons for selecting the best framework for the current application?_ __

And _this_ brings us to the heart of the matter ... __the current application!__

My general opinion is that frameworks and libraries for a programming language or environment are written for one of two general reasons:

  1.  To solve a specific problem or address a defined problem area
  2.  As an interesting experiement (or an "_I can do it better_" exercise)


These are great reasons for __ _creating_ __ a library/framework but they don't address the question which _I_ am asked!  The focus here is on __ _why/why not use_ __ said library/framework for the current application!

So, to put two and two toegther, we first need to understand the project or environment in question, identify the technical challenges (and their prevalence ... more on this later) and determine if there is a currently available solution to these challenges.

Here are a few examples of the problems that specific libraries/frameworks address:

1.  ReactJS was created by Facebook to solve a very specific problem.  Facebook is composed of a multitude of components that address the same data that changes over time.  A great example that FB uses is the message count.  They display it in several components simultaneously.
2.  AngularJS was designed to separate HTML/CSS from JavaScript and provide 2-way databinding (in v 1.x) to address data that changes over time.
3.  Reactive JavaScript (RxJS) is not to be confused with ReactJS.  RxJS, a port of Rx.NET, is designed to consume data that can be presented in streams.  Although even mouse clicks can be presented in streams to RxJS, if you don't really NEED the streams for other purposes then be careful not to make streams where they don't make sense!

The question then becomes, "do any available solutions solve any of the challenges that my application requirements present?"  If the application is basically an information gathering type of site where the data changes little over time and you have a full compliment of HTML/CSS proficient designers along with the developers on the project team then Angular might prove to be the better solution!  An application that monitors stock prices and pushes the updates to a graphical interface might be better served using RxJS to consume the data stream along with a bespoke graphics library.

My bottom line is that, just because there is a new framework out there that all of the cool kids are using does NOT make it the best framework for your needs.  The only justification for using a framework that solves problems that you don't have takes us back to the resume building objective.

###Management is not off the hook!
I also believe that there is another culprit who is inadvertanly complicit in all of this ... our __clients/management!__ You might ask how the non-technical members of our little troup here are causing developers to select inapropriate technologies.  As often as not this comes from the pressure to get the newest applications or web sites up and running as quickly as possible ... sometimes as early as yesterday!  When developers are placed in a position to start showing progress immediately they will often turn to a solution that promises rapid development/deployment.  We sometimes chose to ignore the fine print explaining that it's faster if there are specific technical challenges.  Awww, what the heck?! This offers the perfect excuse to use the newest, shiniest toys!  LOOK AT OUR AWESOME RESUMES!!!! I can tell you from 40+ years of experience that "select techology platform" is one of the first items to get axed in the Ghantt chart when there is pressure to get a new product up and running.  (The second thing to go in these circumstances is testing but that's a story for another day!)

###No end in sight
This is not a new problem and is, more than likely, a problem that will never go away.  About the best that the honest, set upon developer can do is try to honestly assess the current requirements, with a "forward looking eye" toward known future endeavors, and make an honest choice.  Sometimes this can be done as part of the project and sometimes it just has to be done mentally on the train some afternoon.  Just do it!

##Full circle
So back to the original question: "why should I use framework X instead of my current framework Y".  The answer is right there in front of each and every serious developer.  Look at project/overall application environment needs and select a solution that is designed to address those needs. Because it's new and cool is NOT a good reason ... yet I write in new, cool frameworks every day ... and have no idea why!
