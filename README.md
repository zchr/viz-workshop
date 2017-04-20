# Let's visualize with p5.js & Raphaël!

[p5.js](https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make code accessible for artists, designers, educators, and beginners, and reinterprets this for today's web. p5.js has a full set of drawing functionality, which you can turn into your whole brower page as your sketch.

[Raphaël](http://dmitrybaranovskiy.github.io/raphael/) uses the SVG W3C Recommendation and VML as a base for creating graphics. This means every graphical object you create is also a DOM object, so you can attach JavaScript event handlers or modify them later. Raphaël’s goal is to provide an adapter that will make drawing vector art compatible cross-browser and easy.


## Now let's start the workshop!

Be sure to look out for the following notations:
* :rocket:: key step
* :white_check_mark:: checkpoint reached!

We will work on **two** separate tasks, one in p5.js and one in Raphaël.

## Part 1: A drawable canvas in p5.js

### :rocket: Step 1

First let's download the `p5.js` complete library. Clone the repository into yours and you will see the your repository like this:

![screenshot1](/screenshots/screenshot1.png)

### :rocket: Step 2
Now let's link the library to your html.
Include the following script into your header of the `index.html`:

``` html
<script language="javascript" type="text/javascript" src="libraries/p5.js"></script>
```

If your `index.html` cannot link to the `p5.js` file, you can alternatively link via the `p5.js` file that is hosted online. Just include the following script into the header of the index.html:

``` html
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/p5.js"></script>
```

We've also included an empty `sketch.js` file. Link that to your `index.html` as well:
``` html
<script language="javascript" type="text/javascript" src="sketch.js"></script>
```


### :rocket: Step 3
Now let's draw something on your page! Start your handy dandy python server by running

`python -m SimpleHTTPServer 9000`

on your :computer:.

Check it out on your [localhost](http://localhost:9000/). Nothing on the page yet, so let's set up the canvas first, copy these two empty functions into sketch.js:

``` js
function setup() {

}

function draw() {

}
```

Add the canvas by adding the following line into the `setup()` function:

``` js
createCanvas(640, 480);
```

Next, let's draw a simple circle onto your page. Add the following code in the `draw()` function:

``` js
ellipse(50, 50, 80, 80);
```

This will draw an ellipse on a spot 50 pixels right and bottom from the screen. The ellipse will have a width and height of 80 pixels.

:white_check_mark: Your page should now look something like this:

![screenshot3](/screenshots/screenshot3.png)

### :rocket: Step 4

In your `draw()` function, let's draw circles with our mouse by changing our original line ot the one below:

``` js
ellipse(mouseX, mouseY, 80, 80);
```

Refresh your page and drag your mouse all over the page. This is how it should look like:

![screenshot4](/screenshots/screenshot4.png)

Let's make the drawing interactive with clicking. As a start, let's try making the circle black when we press our mouse. A helpful `if-else` statement would be

``` js
if (mouseIsPressed) {

} else {

}
```

The statement `fill(0);` makes the fill black, while `fill(255);` makes it white.

(Hint: add the `if` statements before the `ellipse` line.)

:white_check_mark: This is how your page should look like with a series of random presses!

![screenshot5](/screenshots/screenshot5.png)

### :rocket: Step 5

Now let's add **random colors**!

We want to keep the black circles when the mouse is pressed, so lets give random colors to the fill under else.

A simple way to do this is to create red, green, and blue variables -- each set to `random(255)`. Then we can replace `fill(255)` with `fill(red, green, blue)`. You can play around with the random variables in case you want to stay within certain color ranges.

:white_check_mark: Now your page should look something like this.

![screenshot6](/screenshots/screenshot6.png)

### :rocket: Step 6

Now let's do something cool!! This is what we will make, upgrading from the little circles we made.

![screenshot7](/screenshots/screenshot7.png)

First, we are going to change the fill so that the colors will change based on the position of the mouse cursor.

```js
fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
```

This will make sure that the RGB is set based on the position of the mouse.
The circles will look ugly now because of the black strokes(outlines). Let's change it.

Add the stroke function:

```js
stroke(255, 255, 255, 25);
```

Now you'll have beautiful circles all around the page. Next, we will change the circles to rectangles. Just update ellipse() to rect().

```js
rect(mouseX,mouseY,50,50);
```

If the mouse is clicked, it will turn the rectangles to black.

:white_check_mark: Cool! Now you can draw all the cool stuff. Take a screenshot of your coolest drawing! Let's move on to the next part.


## Part 2: Interactive graph in Raphaël

### :rocket: Step 1

Not really a draw person? We'll now move on to visualizing data with Raphaël. In this tutorial, we will create a diagram using Raphaël. We will draw some arcs using mathematical functions and we'll be displaying a skill percentage in a main circle when we hover over the arcs. Let's switch to the `raphael_tutorial.html` file.

### :rocket: Step 2

Let's link the library to your html.
Include the following scripts into your header:

``` html
<script src="js/jquery.js" type="text/javascript"></script>
```

``` html
<script src="js/raphael.js" type="text/javascript"></script>
```

``` html
<script src="init.js" type="text/javascript"></script>
```

### :rocket: Step 3

We've provided you with the markup in html and css so don't worry about those, but look through them to get a general idea. In `init.js`, we've created a new Raphaël object (variable 'r') and drew our first circle with a radius that we specified in 'rad'. Then we created a new circle in the Raphael object. We centered the circle (x: 300px and y: 300px) and we added some text to it.

:white_check_mark: Now run the server again with

`python -m SimpleHTTPServer 9000`

This time go on [http://localhost:9000/raphael_tutorial.html](http://localhost:9000/raphael_tutorial.html), you should see something like this!

![screenshot8](/screenshots/screenshot8.png)

Only the legend and one circle show right now, but don't worry!

### :rocket: Step 4

You'll extend the Raphael object with some custom attributes.

Some things to note:

  * `alpha` – angle of the arc
  * `random` – random number from the specified range
  * `sx`, `sy` – start drawing from this point
  * `x`, `y` – end drawing at this point
  * `M` – move to the starting point. No line is drawn. All path data must begin with a `moveto` command.
  * `A` – radius-x, radius-y x-axis-rotation, large-arc-flag, sweep-flag, x, y (read more: https://developer.mozilla.org/en/SVG/Tutorial/Paths)

Let's start by adding the following line to `init.js`:

``` js
r.customAttributes.arc = function(value, color, rad){

}
```

Then copy and paste the following into the function:

``` js
var v = 3.6*value,
  alpha = v == 360 ? 359.99 : v,
  random = o.random(91, 240),
  a = (random-alpha) * Math.PI/180,
  b = random * Math.PI/180,
  sx = 300 + rad * Math.cos(b),
  sy = 300 - rad * Math.sin(b),
  x = 300 + rad * Math.cos(a),
  y = 300 - rad * Math.sin(a),
  path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
```

and make sure this `var v` returns

``` js
{ path: path, stroke: color }
```

### :rocket: Step 5

Next, copy this empty function call (still within `var o`, inside the `diagram: function()`):

``` js
$('.get').find('.arc').each(function(i){

});
```

Add the variables

``` js
var t = $(this),
  color = t.find('.color').val(),
  value = t.find('.percent').val(),
  text = t.find('.text').text();

rad += 30;
var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });
```

:white_check_mark: Cool! Now we have a diagram like this, but we want to make it more exciting! Let's add some cool hover effects.

![screenshot9](/screenshots/screenshot9.png)

### :rocket: Step 6

Copy and paste this after our defined variables but still within the function following `$('.get')`.

``` js
z.mouseover(function(){
  this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
  if(Raphael.type != 'VML') //solves IE problem
    this.toFront();
  title.stop().animate({ opacity: 0 }, speed, '>', function(){
    this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
  });
}).mouseout(function(){
  this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
  title.stop().animate({ opacity: 0 }, speed, '>', function(){
    title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
  });
});
```
Test out the hover and see the cool arcs expand!
![screenshot10](/screenshots/screenshot10.png)

## :white_check_mark: Hurray! You're done!!

Go ahead and have fun making pretty stuff :D 🎨

Submit screenshots of your final pages (both p5.js & Raphaël), especially fun drawings!

## Sources
* https://p5js.org/
* https://codepen.io/collection/DRzkdM/
* http://dmitrybaranovskiy.github.io/raphael/
* https://tympanus.net/codrops/2011/04/22/animated-skills-diagram/
