# Let's visualize with p5.js!

[p5.js](https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make code accessible for artists, designers, educators, and beginners, and reinterprets this for today's web. p5.js has a full set of drawing functionality, which you can turn into your whole brower page as your sketch.


## Now let's start the workshop!
Be sure to look out for the following notations:
* :computer: run in terminal
* :rocket: this is a key step
* :warning: watch out!
* :question: explanation section- what is going on here?
* :white_check_mark: checkpoint reached!

## Step 1 :rocket:
First let's download the p5.js complete library. Clone the repository into yours and you will see the your repository like this:

![screenshot1](/screenshots/screenshot1.png)

## Step 2: :rocket:
Now let's link the library to your html.
Include the following script into your header of the index.html:

`<script language="javascript" type="text/javascript" src="libraries/p5.js"></script>`

If your index.html cannot link to the p5.js, you can alternatively link via p5.js file that is hosted online. Just include the following script into the header of the index.html:

`<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/p5.js"></script>`

## Step3: :rocket:
Now let's draw something on your page! First go and open your index.html file on Chrome.

![screenshot2](/screenshots/screenshot2.png)

Next, let's draw a simple circle onto your page.
Open your sketch.js and add the following code in the draw function.

`ellipse(50, 50, 80, 80);`

This will draw an ellipse on a spot 50 pixels right and bottom from the screen. The ellipse will have a width and height of 80 pixels.

Your page should now look something like this:

![screenshot3](/screenshots/screenshot3.png)

## Step4: :rocket:
Now let's make a canvas where you can draw circles with your cursor!

In your setup function, create a canvas that is 640 by 480 pixels by using the function:

`createCanvas(width, height)`

Then, in your draw function, let's make make where ever the mouse is to draw circles.

`ellipse(mouseX, mouseY, 80, 80);`

Refresh your page and drag your mouse all over the page. This is how it should look like:

![screenshot4](/screenshots/screenshot4.png)


From here, you should figure out how to draw a circle **black** whenever the mouse is pressed.
Here are some functions that you can play around with: `mouseIsPressed` `fill()`

If you are successful, this is how your page should look like.

![screenshot5](/screenshots/screenshot5.png)
