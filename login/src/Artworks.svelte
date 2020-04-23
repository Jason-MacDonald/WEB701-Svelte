<script>
  import { db } from "./firestore.js";
  import Artwork from "./Artwork.svelte";

  import firebase from "firebase";

  let artworks = [];
  let name = "";
  let type = "";
  let artist = "";
  let description = "";
  let price = "";

  db.collection("artwork")
    .orderBy("created")
    .onSnapshot(data => {
      artworks = data.docs;
    });
  const addArtwork = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      const created = new Date().getTime();
      const createdBy = user.email;
      db.collection("artwork").add({
        name,
        type,
        artist,
        description,
        price,
        created,
        createdBy
      });
      name = "";
      type = "";
      artist = "";
      description = "";
      price = "";
      console.log("Artwork added.");
    } else {
      console.log("No user signed in.");
    }
  };
</script>

<style>
  .artwork form {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
</style>

ARTWORKS:
<div class="artwork">
  <form on:submit|preventDefault={addArtwork}>
    <input type="text" bind:value={name} placeholder="Name" required />
    <input type="text" bind:value={type} placeholder="Type" required />
    <input type="text" bind:value={artist} placeholder="Artist" required />
    <input
      type="text"
      bind:value={description}
      placeholder="Description"
      required />
    <input type="text" bind:value={price} placeholder="Price" required />
    <button>ADD</button>
  </form>
</div>

<div id="artworks">
  {#each artworks as artwork}
    <Artwork id={artwork.id} artwork={artwork.data()} />
  {/each}
</div>
