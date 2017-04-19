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

We've also included an empty sketch.js file, link that to your index.html as well:

`<script language="javascript" type="text/javascript" src="sketch.js"></script>`

## Step3: :rocket:
Now let's draw something on your page! First go and open your index.html file on Chrome.

![screenshot2](/screenshots/screenshot2.png)

Nothing on the page yet, so let's set up the canvas first, copy these two empty functions into sketch.js:

```
function setup() {

}

function draw() {

}
```

Add the canvas by adding the following line into the `setup()` function:

`createCanvas(640, 480);`

Next, let's draw a simple circle onto your page. Add the following code in the `draw()` function:

`ellipse(50, 50, 80, 80);`

This will draw an ellipse on a spot 50 pixels right and bottom from the screen. The ellipse will have a width and height of 80 pixels.

Your page should now look something like this:

![screenshot3](/screenshots/screenshot3.png)

## Step 4: :rocket:
Now let's make the canvas draw-able!

In your `draw()` function, let's draw circles with our mouse by changing our original line ot the one below:

`ellipse(mouseX, mouseY, 80, 80);`

Refresh your page and drag your mouse all over the page. This is how it should look like:

![screenshot4](/screenshots/screenshot4.png)


Let's make the drawing interactive with clicking. As a start, let's try making the circle black when we press our mouse. A helpful `if-else` statement would be

```
if (mouseIsPressed) {

} else {

}
```

The statement `fill(0);` makes the fill black, while `fill(255);` makes it white.

(Hint: add the `if` statements before the `ellipse` line.)

This is how your page should look like with a series of random presses!

![screenshot5](/screenshots/screenshot5.png)

## Step 5: :rocket:
Now let's add random colors!

We want to keep the black circles when the mouse is pressed, so lets give random colors to the fill under else.

A simple way to do this is to create red, green, and blue variables -- each set to random(255). Then we can replace fill(255) with fill(red, green, blue). You can play around with the random variables in case you want to stay within certain color ranges.

Now your page should look something like this.

![screenshot6](/screenshots/screenshot6.png)

## Step 6: :rocket:
Now let's do something cool!! This is what we will make, upgrading from the little circles we made.

![screenshot7](/screenshots/screenshot7.png)

First, we are going to change the fill so that the colors will change based on the position of the mouse cursor.

`fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);`

This will make sure that the RGB is set based on the position of the mouse.
The circles will look ugly now because of the black strokes(outlines). Let's change it.

Add the stroke function:

`stroke(255, 255, 255, 25);`

Now you'll have beautiful circles all around the page. Next, we will change the circles to rectangles. Just update ellipse() to rect().

`rect(mouseX,mouseY,50,50);`

 If the mouse is clicked it will still turn the rectangles to black.

 ## Hurray! You're done!!

 ## Sources

 - https://p5js.org/
