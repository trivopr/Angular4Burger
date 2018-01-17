import * as firebase from 'firebase';

export class AuthService {

    // Token
    token = '';

    constructor() {}

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => console.log('Create User OK !!', response))
        .catch((error) => {
            debugger;
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }            
        });
    }

    // SignIn Service
    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            firebase.auth().currentUser.getToken()
            .then((tk) => this.token = tk)
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });        
    }


    // SignOut Service
    signOut() {
        firebase.auth().signOut()
            .then((response) =>this.token = null)
            .catch((err) => console.log('Errr:', err));
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then((tk) => {
                this.token = tk;
            })
        return this.token;
    }

    isAuthenticated() {
        return !!this.token;
    }

}