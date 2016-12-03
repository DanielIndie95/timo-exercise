# Running the app
1. Install node.js (and npm if needed)
2. git clone https://gitlab.com/galman33/TimoExercise.git
2. npm install
3. npm start

# Techonologies to learn and use in the exercise
- Typescript
- React
- Webpack
- OnsenUI
- Mobx
- Firebase

# The exercise
Create a working app containing the following pages:
* Login page:
  * Email and password fields
  * Login button (using Firebase)
  * Register button (using Firebase)
* Main page:
  * Contins two tabs:
    * My profile tab (All data fetched from firebase)
      * Avatar image (A default one)
      * Name
      * Description
      * Email
      * Edit button (Opens the edit profile page)
    *  My friends tab
        *  List of my friends
            *  Each item conatins the default avatar and the name of the friend
            *  Each item in the list opens the friend profile page when clicked
        *  Add friend by email button
* Friend page:
  * Default avatar
  * Friend name
  * Friend description
  * Friend email
  * Back button
* Edit my profile page:
  * My name field
  * My description field
  * Save button