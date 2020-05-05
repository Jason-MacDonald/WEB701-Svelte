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
        var errorCode = error.code;
        console.log(errorCode);
      });
    email = "";
    password = "";
    console.log("Account has been registered");
  };
</script>

REGISTER:
<form class="register" on:submit|preventDefault={register}>
  <input type="text" bind:value={email} placeholder="Email" required />
  <input type="text" bind:value={password} placeholder="Password" required />
  <button>Register</button>
</form>
