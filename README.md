# ToDo List

## Table of content

- [Description](#description)
- [Setting Up and Running the Application](#setting)
- [Roadmap of Future Improvements](#roadmap)
- [License](#license)

## Description
This exercise uses React along with javascript to create a to do list.  The Bootstrap framework is used as the style guide. You can type in new tasks and hit enter or click the <b>Add Task</b> button to add a new item to the list.  An "X" button on each task allows you to delete.  Clicking the checked button will mark it as complete.

## Setting Up and Running The Application
1) Clone this repository on a local machine
  - index.html is where your React app will be loaded inside the TodoBox element
  - index.js, form.js and todo.js contain the javascript functions used by the application.
2) Open a command line on your computer and run the command cd path/to/project/root (replace with actual path to the local repository)
3) Within the same command-line window, run <b>http-server -c-0</b> to start up a local http-server.   This is needed to run the react application
4) You should see the ip address for the server.  Go to a browser and enter this as URL <ip-address>/index.html
5) Enter a new task and hit enter or click on submit to add a task.

### About
This application is made up of 4 main files
  - <b>index.html</b> which includes the libraries for bootstrap,  google fonts and react as well as the main div to display.
  - <b>todo.js</b> which contains the function to create the new todo
  - <b>form.js</b> which contains the functions to add and delete todo items
  - <b>index.js</b> which contains the main app function which renders the to do list
 
## Roadmap of Future Improvements
•	None at this time

## License

MIT License

Copyright (c) 2022
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
