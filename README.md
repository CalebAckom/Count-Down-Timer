# Count Down Timer

## Assignment Instructions

Tasked with creating a countdown timer that counts down from a specific time to zero using JavaScript. The countdown timer should display the remaining time in minutes, and seconds. It should also display the expected time of return in 12-hour format.

In your JavaScript file:

- Create the countdown timer program.
  - The user can enter a specific time they would like to count down from, either by selecting one of the available options on the screen or entering the time in minutes.
  - The program should display the remaining time in minutes and seconds and the expected time of return in 12-hour format .
- Inside this program, you should update the display every second to show the remaining time in minutes and seconds. You can use the getHours(), getMinutes(), and getSeconds() methods of the Date() object to get the current hour, minute, and second, respectively. You can also use the now() method that returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
- Updating the Count Down Timer
  - To update the count down every second, use the setInterval() method.

The page should show the available options (either selecting one of the buttons or entering a time frame in minutes) at the top then count down from a user-specified time.
