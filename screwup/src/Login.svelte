<script>
  import firebase from "firebase";
  import * as firebaseui from "firebaseui";

  let email = "";
  let password = "";

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
    email = "";
    password = "";
    console.log("User has been logged in.");
  };
</script>

<style>
  .login {
    display: grid;
    grid-template-columns: 5fr 5fr 2fr;
    grid-gap: 10px;
  }
</style>

LOGIN:
<form class="login" on:submit|preventDefault={login}>
  <input type="text" bind:value={email} placeholder="Email" required />
  <input type="text" bind:value={password} placeholder="Password" required />
  <button>Login</button>
</form>

<!-- TODO -->
<!-- firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
}); -->
