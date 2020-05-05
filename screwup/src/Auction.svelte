<script>
  import { db } from "./firestore.js";
  import firebase from "firebase";

  export let id = "";
  export let auction = {};

  let bid = auction.currentBid;

  const updateBid = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      if (bid > auction.currentBid) {
        db.collection("artworks")
          .doc(id)
          .update({
            currentBid: bid,
            bidder: user.email
          });
        console.log("Bid Registered.");
      } else {
        console.log("Bid is not higher than current bid.");
      }
    } else {
      console.log("No user signed in.");
    }
  };
</script>

<style>
  .auction form {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 6fr 3fr 1fr 4fr;
    grid-gap: 10px;
  }
</style>

<div class="auction">
  <form on:submit|preventDefault={updateBid}>
    <p>Name: {auction.name}</p>
    <p>Type: {auction.type}</p>
    <p>Artist: {auction.artist}</p>
    <p>Description: {auction.description}</p>
    <p>Current Bid: {auction.currentBid}</p>
    <input type="number" bind:value={bid} />
    <button type="text">Bid</button>
  </form>
</div>
