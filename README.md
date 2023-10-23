# Todo-List-App
# Description
This is a simple Todo List app that allows you to add, edit, and delete to-do items.

# Features
- User-friendly task management
- Create, update, and delete tasks
- Mark tasks as complete

# Prerequisites
- Node.js and npm installed


# Installation
1. Clone the repository to your local machine (if you have Git):
git colne

2. Change directory to the project folder:
- spit the terminal and run commond
- cd Backend 
- cd Frontend

3. Install server dependencies:

4. Change to the client directory and install client dependencies:


### Starting the Backend
1. In the root directory of the project, create a `.env` file and set the following variables:
- MONGO_URI = your_mongodb_connection_string
- PORT = 4040
- JWT_SECRET=your_sceret_key
- NODE_ENV=Development
- CLIENT_URL = "http://localhost:5173"


2. To start the backend server, run:
npm run dev

# Starting the Frontend
1. Return to the root project directory (if you are not already there).
2. To start the React frontend, run:
npm run dev


## Usage
1. Open your web browser and go to [http://localhost:3000 ](http://localhost:5173)(or the specified frontend URL).

2. Sign up for an account or log in if you have already registered.

3. Start managing your tasks by adding, updating, marking as complete, or deleting them.

5. Enjoy the efficient task management provided by this Todo App!



# How my Todo List app works
My Todo List app is a React web application that uses Node.js and MongoDB on the backend. The app allows users to create, manage, and delete to-do items.

# Frontend code

- The frontend code is written in React and uses React Router to handle routing. 
- The main component is the App component, which renders the Header and Router components.
- The Header component contains the app title and links to the home and profile pages.
- The Router component renders the different pages of the app, such as the home page, login page, and register page.
- The home page contains a form for adding new to-do items and a list of all existing to-do items. 
- The login page and register page are used for users to log in and create new accounts, respectively.

# Backend code
- The backend code is written in Node.js and uses MongoDB to store data. The main backend code is located in the server.js file.

- To use the Todo List app, you will need to create an account and log in. Once you are logged in, you can start adding to-do items.
- To add a new to-do item, go to the home page and enter the title and description of the item in the form. Then, click the "Add Task" button.
- To view all of your to-do items, go to the home page.
- To update a to-do item, click the "Update" button next to the item. Thn, make the necessary changes and click the "Update" button again.
- To delete a to-do item, click the "Delete" button next to the item.

# Troubleshooting tips
- If you are having problems with the Todo List app, here are some troubleshooting tips:
- Make sure that you are logged in.
- Make sure that you have a good internet connection.
- Try refreshing the page.
- If you are still having problems, try clearing your browser's cache and cookies.

# Conclusion
My Todo List app is a simple but functional to-do list application. It is easy to use and can be used to manage your to-do items on the go.
