# WEB701-Svelte

A testing environment project for WEB701 using the Svelte framework.

Below will contain an outline and summary covering the research of several functionality requirements and how they may be achieved within the Svelte Framework .

Similar research and testing has been completed on the following Frameworks:

- [Vue](https://github.com/Jason-MacDonald/WEB701-Vue)
- [Express](https://github.com/Jason-MacDonald/WEB701-Express)

## Functionality Testing:

### Members and Customers can Login and Administer their Account.

[https://www.youtube.com/watch?v=Rr2kKjYIYRM](https://www.youtube.com/watch?v=Rr2kKjYIYRM)

#### Instructions:

Open `login` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

This prototype has three accounts setup for use:

1. Username: user1@email.com P@ssword1
1. Username: user2@email.com P@ssword2
1. Username: user3@email.com P@ssword3

After a user is logged in, the first and last name can be updated.

### Members use the Auction System to Register their Products.

#### Instructions:

Open `auctionRegister` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

Artwork details can be entered and will be added to a locally stored list of auction items. The items are then displayed to the screen.

### Customers use the Auction System to Bid on Products.

#### Instructions:

Open `auctionBidding` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

The current user and an artwork are stored locally. By increasing and submitting a new bid, the artworks current bid and account field of the bidder will be updated.

### A web-based product postage calculator that provides the cost of postage according to size, weight, fragility etc.

#### Instructions:

Open `calculator` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

Changing the fields and clicking the calculate freight button will provide a new estimated cost of postage.

### Interactive Elements that Engage the Website User

#### Instructions:

Open `interactiveElement` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

A simple interactive card is displayed.

### Store and Retrieve data from a server-side database.

#### Instructions:

Open `database` folder in the terminal.

```
npm run start
```

Browse to localhost:5000

Registering with an email and password will add a user account to the firebase authentication database. When logged in with a user session, the current user can be easily returned to authenticate athe user.
