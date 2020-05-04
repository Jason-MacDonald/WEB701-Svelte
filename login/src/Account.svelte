<script>
  import { db } from "./firestore.js";
  import firebase from "firebase";

  export let id = "";
  export let account = {};

  const updateAccount = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("accounts")
        .doc(id)
        .update({
          firstName: account.firstName,
          lastName: account.lastName
        });
      console.log("Account updated.");
    } else {
      console.log("No user signed in.");
    }
  };
</script>

<style>
  .account {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
</style>

<div class="account">
  <input
    type="text"
    bind:value={account.firstName}
    on:input={updateAccount}
    placeholder="First Name" />
  <input
    type="text"
    bind:value={account.lastName}
    on:input={updateAccount}
    placeholder="Last Name" />
</div>
