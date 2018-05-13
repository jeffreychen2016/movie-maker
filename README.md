# Movie Maker

## Description
This app is created to help movie producer determine if I will be able to make a movie given a certain budget and movie elements of choosing.

## Screenshot
![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%202.54.41%20PM.png
)

1. Upon arriving this page, you will see an input box for entering movie budget. When you click on a button that says 'Set Budget', then you can start to choose things to add to my movie. (checkboxes on the page are read-only until a budget is set).

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%202.55.16%20PM.png
)

2. When you add a movie element, your remaining budget should decrease with the cost of the element and the movie element that you added will show up below your remaining budget with the cost of the element.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%202.56.01%20PM.png
)

3. If you still have remaining budget (have not gone over budget) and you have choosen at least one element from each category, then you can make the movie.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%202.55.45%20PM.png
)

4. If you have chosen one element from each category and over budget then it will display "You can not make the movie!"

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%202.56.12%20PM.png
)

5. If you still under budget but you did not pick element from all categories, then you still can not make the movie.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/movie-maker/master/imgs/Screen%20Shot%202018-05-13%20at%205.25.55%20PM.png
)

6. You will be able to change the budget once it has been set by clicking on the "Change Budget" button. All existing selections will be saved for new budget. Once a new budget is entered, it will re-calculate the budget to see if you can make the movie.

## How to Run
1. Clone down this repo and CD into project.
2. Install the http-server plugin via npm.
3. CD into the lib directory and run npm install via command line.
4. In the lib directory run the command grunt.
5. CD to the root of the directory and type hs to start the local http-server.
6. The terminal will give you a URL, such as http://127.0.0.1:8081, enter that address into your web browser.

## Contributors
[Jeffrey Chen](https://github.com/jeffreychen2016)