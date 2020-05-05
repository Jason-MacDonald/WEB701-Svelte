<script>
  let currentAccount = {
    email: "user1@email.com"
  };

  let auctionItem = {
    id: 0,
    name: "Art Piece One",
    description: "This is the selected art piece",
    type: "Painting",
    currentBid: 1000,
    currentBidHolder: null
  };

  let newBid = auctionItem.currentBid + 1;

  const addBid = () => {
    auctionItem.currentBid = newBid;
    auctionItem.currentBidHolder = currentAccount.email;
    console.log(auctionItem);
  };
</script>

<form on:submit|preventDefault={addBid}>
  <input disabled value={auctionItem.name} />
  <input disabled value={auctionItem.description} />
  <input disabled value={auctionItem.type} />
  {#if auctionItem.currentBidHolder != null}
    <input disabled value={auctionItem.currentBidHolder} />
  {:else}
    <input disabled value="No current bids." />
  {/if}
  <input disabled value={auctionItem.currentBid} />
  <input type="number" bind:value={newBid} min={auctionItem.currentBid + 1} />
  <button>Place Bid</button>
</form>
