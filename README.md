
# Thai ID OCR App Assignment

OCR App made using MERN tech stack which allows user to give image as input and do OCR recogination on the image and save in information in database.Many CRUD operation are also their such as Search By Name, Update By Identification ID, Delete by Identification ID.

I was successfully able to deploy this project.But I am attaching a video link of project working.


Video of live demo on project when not hosted:[Live-Demo](https://drive.google.com/file/d/1tJrUQn7ahVxn58-qYjEW0k5XnUGYFE3b/view?usp=sharing)


## Features

-UI to add Thai Nationality Card Image
-Add information about the person in the database from the text obtained by doing OCR Text Recogination through Tesseract.js.
-Perform CRUD Operation on Database.
-Update the expiry data in database accoring to Indentification Number provided by user.
-To get list of person according to name provided by the user.
-Delete entry from database according to ID provided by user.

## Future Scope of Improvement

- Not to add data in database when image is not clear.
- Apply logic at backend side so that multiple entry with same Indenfication Number is not allowed.
- Enchance CRUD operations.
- To manually take the data when image is not clearly upload and insert this entry in database.
- Host the project. 

## Tech Stack

React,  HTML, CSS, JavaScript

## Framework
 
 Expressjs

## Database
 MongoDB

## Packages Used


#### `Tesseract.js`

Tesseract.js, a JavaScript library, is used for OCR processing. It's a powerful OCR engine that can recognize text in various languages.

#### `Mongoose`

Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to interact with MongoDB databases by translating between objects in code and the representation of those objects in the database.

#### `Multer`
Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.

## How to run?

#### Frontend

Clone this repository into your system. 

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


#### Backend

#### `npm run nodemon`

Will start the backend server at a given port.

## 🔗 Contributer

[Prateek Sharma](https://github.com/prateek272002)




