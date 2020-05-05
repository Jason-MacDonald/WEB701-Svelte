<script>
  import { db } from "./firestore.js";
  import firebase from "firebase";

  export let id = "";
  export let artwork = {};

  const deleteArtwork = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      if (user.email == artwork.createdBy) {
        db.collection("artwork")
          .doc(id)
          .delete();
        console.log("Artwork deleted.");
      } else {
        console.log("User does not have permission to delete this artwork.");
      }
    } else {
      console.log("No user signed in.");
    }
  };

  const updateArtwork = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("artwork")
        .doc(id)
        .update({
          name: artwork.name,
          type: artwork.type,
          artist: artwork.artist,
          description: artwork.description,
          price: artwork.price
        });
      console.log("Artwork updated.");
    } else {
      console.log("No user signed in.");
    }
  };
</script>

<style>
  .artwork {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
</style>

<form class="artwork" on:submit|preventDefault={deleteArtwork}>
  <input type="text" bind:value={artwork.name} on:input={updateArtwork} />
  <input type="text" bind:value={artwork.type} on:input={updateArtwork} />
  <input type="text" bind:value={artwork.artist} on:input={updateArtwork} />
  <input
    type="text"
    bind:value={artwork.description}
    on:input={updateArtwork} />
  <input type="text" bind:value={artwork.price} on:input={updateArtwork} />
  <button>Delete</button>
</form>
