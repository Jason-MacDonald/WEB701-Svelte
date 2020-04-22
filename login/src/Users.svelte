<script>
  import { db } from "./firestore.js";
  import User from "./User.svelte";

  let users = [];
  let email = "";
  let name = "";

  db.collection("users")
    .orderBy("created")
    .onSnapshot(data => {
      users = data.docs;
    });
  const addUser = () => {
    const created = new Date().getTime();
    db.collection("users").add({
      email,
      name,
      created
    });
    email = "";
    name = "";
  };
</script>

<style>
  .user form {
    display: grid;
    grid-template-columns: 10fr 10fr 3fr;
    grid-gap: 10px;
  }
</style>

<div class="user">
  <form on:submit|preventDefault={addUser}>
    <input type="text" bind:value={email} />
    <input type="text" bind:value={name} />
    <button>ADD</button>
  </form>
</div>

<div id="users">
  USERS:
  {#each users as user}
    <User id={user.id} user={user.data()} />
  {/each}
</div>
