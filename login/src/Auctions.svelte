<script>
  import { db } from "./firestore.js";
  import Auction from "./Auction.svelte";

  import firebase from "firebase";

  let auctions = [];
  let name = "";
  let type = "";
  let artist = "";
  let description = "";
  let currentBid = 0;

  db.collection("artworks")
    .orderBy("created")
    .onSnapshot(data => {
      auctions = data.docs;
    });
</script>

<div id="artworks">
  {#each auctions as auction}
    <Auction id={auction.id} auction={auction.data()} />
  {/each}
</div>
