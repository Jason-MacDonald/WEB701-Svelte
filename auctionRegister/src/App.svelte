<script>
  let auctionItems = [];

  let name = "";
  let description = "";
  let type = "";
  let currentBid;

  const addAuctionItem = () => {
    let auctionItem = {
      name: name,
      description: description,
      type: type,
      currentBid: currentBid
    };
    auctionItems = [...auctionItems, auctionItem];
  };
</script>

<form on:submit|preventDefault={addAuctionItem}>
  <input type="text" bind:value={name} placeholder="Name" />
  <input type="text" bind:value={description} placeholder="Description" />
  <input type="text" bind:value={type} placeholder="Type" />
  <input type="text" bind:value={currentBid} placeholder="Starting Bid" />
  <button>Add Auction Item</button>
</form>

<div>
  {#each auctionItems as auctionItem}
    <div>
      <input disabled value={auctionItem.name} />
      <input disabled value={auctionItem.description} />
      <input disabled value={auctionItem.type} />
      <input disabled value={auctionItem.currentBid} />
    </div>
  {/each}
</div>
