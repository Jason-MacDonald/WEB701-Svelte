<script>
  import { db } from "./firestore.js";
  import Account from "./Account.svelte";

  import firebase from "firebase";

  let accounts = [];

  var user = firebase.auth().currentUser;

  const reload = () => {
    user = firebase.auth().currentUser;

    if (user != null) {
      db.collection("accounts")
        .where("owner", "==", user.email)
        .get()
        .then(data => {
          accounts = data.docs;
        });
    }
    console.log("reloaded");
  };
</script>

<style>
  .account {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
</style>

ACCOUNTS:
<div class="account">
  <button on:click={reload}>Reload</button>
</div>

<div id="account">
  {#each accounts as account}
    <Account id={account.id} account={account.data()} />
  {/each}
</div>
