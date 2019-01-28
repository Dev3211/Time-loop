# Time-loop

In this video I create a custom function which loops through an Array using a simple method giving you an example of how these loops kind of work. Although, I would love to call this loop **time loop** as it waits between each iteration depending on the speed you put.


Link to the video: https://youtu.be/f5KiXfwhpPM

# How does it work?

All I do is create an instance of the Array class and define a custom prototype object after that I use a simple set interval function depending the time you have put in MS(Milli seconds) and on each interval I increment the index value and return the array's value to the callback function which will return the results one by one in the array I loop and at last if the increment is greater than array's length, all I do is clearInterval which should stop the interval and also check for undefined to prevent the callback function from outputting the undefined value if it ever goes higher than the array's length.

