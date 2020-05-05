<script>
  import { db } from "./firestore.js";

  import firebase from "firebase";
  import * as firebaseui from "firebaseui";

  let email = "";
  let password = "";

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
      });
    addAccount();
    email = "";
    password = "";
    console.log("Account has been registered");
  };

  const addAccount = () => {
    const owner = email;
    const firstName = "";
    const lastName = "";
    db.collection("accounts").add({
      owner,
      firstName,
      lastName
    });
    console.log("Account Added.");
  };
</script>

<style>
  .register {
    display: grid;
    grid-template-columns: 5fr 5fr 2fr;
    grid-gap: 10px;
  }
</style>

REGISTER:
<form class="register" on:submit|preventDefault={register}>
  <input type="text" bind:value={email} placeholder="Email" required />
  <input type="text" bind:value={password} placeholder="Password" required />
  <button>Register</button>
</form>
