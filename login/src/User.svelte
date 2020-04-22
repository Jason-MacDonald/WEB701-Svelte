<script>
  import { db } from "./firestore.js";
  export let id = "";
  export let user = {};

  const deleteUser = () => {
    db.collection("users")
      .doc(id)
      .delete();
  };

  const updateUser = () => {
    db.collection("users")
      .doc(id)
      .update({
        email: user.email,
        name: user.name
      });
  };
</script>

<style>
  .user {
    display: grid;
    grid-template-columns: 10fr 10fr 3fr;
    grid-gap: 10px;
  }
</style>

<div class="user">
  <input type="text" bind:value={user.email} on:input={updateUser} />
  <input type="text" bind:value={user.name} on:input={updateUser} />
  <button on:click={deleteUser}>Delete</button>
</div>
