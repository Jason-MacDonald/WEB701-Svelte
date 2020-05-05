<script>
  import { Card, Button, Image } from "smelte";
</script>

<Card.Card>
  <div slot="title">
    <Card.Title
      title="Artwork Number One"
      subheader="Gallery A"
      avatar="https://placekitten.com/64/64" />
  </div>
  <div slot="media">
    <Image class="w-full" src="https://placekitten.com/300/200" alt="kitty" />
  </div>
  <div slot="text" class="p-5 pb-0 pt-3 text-gray-700 body-2">
    This is a svelte example of a simple card.
    <br />
    Cards are likely to be use display galleries of
    <br />
    Auction Items and Members and events.
  </div>
  <div slot="actions">
    <div class="p-2">
      <Button text>See More</Button>
      <Button text>Place Bid</Button>
    </div>
  </div>
</Card.Card>
