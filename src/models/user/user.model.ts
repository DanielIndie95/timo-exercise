export module Users
{
	export class UsersApi{	

		public getCurrentUser() : User
		{
			var user = firebase.auth().currentUser;
			return new User("daniel" , "daniel");
		}

		public createNewUser(email , password, user) : User{
			var newUser = new User(email , user);

			return firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				throw error;
				// ...
			})
			.then(function (authData) {
				firebase.auth().currentUser.updateProfile({
					displayName : newUser.name
				});
				var connectedUser = firebase.auth().currentUser();
				firebase.database().ref("/users/"+connectedUser.uid , {
					description : newUser.description
				});
					return newUser;
				});
		}
	}

	export class User{
		public name : string;
		public email :string;
		public description: string;
		constructor(name : string, email : string , description = "")
		{
			this.name = name;
			this.email = email;
			this.description = description;
		}
	}
}