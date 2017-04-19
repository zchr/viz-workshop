# Let's visualize with p5.js & Raphaël!

[p5.js](https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make code accessible for artists, designers, educators, and beginners, and reinterprets this for today's web. p5.js has a full set of drawing functionality, which you can turn into your whole brower page as your sketch.

[Raphaël](http://dmitrybaranovskiy.github.io/raphael/) uses the SVG W3C Recommendation and VML as a base for creating graphics. This means every graphical object you create is also a DOM object, so you can attach JavaScript event handlers or modify them later. Raphaël’s goal is to provide an adapter that will make drawing vector art compatible cross-browser and easy.


## Now let's start the workshop!
Be sure to look out for the following notations:
* :computer: run in terminal
* :rocket: this is a key step
* :warning: watch out!
* :question: explanation section- what is going on here?
* :white_check_mark: checkpoint reached!

## p5.js: Step 1 :rocket:
First let's download the p5.js complete library. Clone the repository into yours and you will see the your repository like this:

![screenshot1](/screenshots/screenshot1.png)

## p5.js: Step 2 :rocket:
Now let's link the library to your html.
Include the following script into your header of the index.html:

`<script language="javascript" type="text/javascript" src="libraries/p5.js"></script>`

If your index.html cannot link to the p5.js, you can alternatively link via p5.js file that is hosted online. Just include the following script into the header of the index.html:

`<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/p5.js"></script>`

We've also included an empty sketch.js file, link that to your index.html as well:

`<script language="javascript" type="text/javascript" src="sketch.js"></script>`

## p5.js: Step 3 :rocket:
Now let's draw something on your page! Start your handy dandy python server by running

`python -m SimpleHTTPServer 9000` on your :computer:

Check it out on your [localhost](http://localhost:9000/). Nothing on the page yet, so let's set up the canvas first, copy these two empty functions into sketch.js:

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

## Step 4 :rocket:
Now let's make the canvas draw-able!

In your `draw()` function, let's draw circles with our mouse by changing our original line ot the one below:

`ellipse(mouseX, mouseY, 80, 80);`

Refresh your page and drag your mouse all over the page. This is how it should look like:

![screenshot4](/screenshots/screenshot4.png)

## Step 5 :rocket:
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
