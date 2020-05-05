# WEB701-Svelte

A testing environment project for WEB701 using the Svelte framework.

Below will contain an outline and summary covering the research of several functionality requirements and how they may be achieved within the Svelte Framework .

Similar research and testing has been completed on the following Frameworks:

- [Vue](https://github.com/Jason-MacDonald/WEB701-Vue)
- [Express](https://github.com/Jason-MacDonald/WEB701-Express)

## Functionality Testing:

### Members and Customers can Login and Administer their Account.

https://www.youtube.com/watch?v=Rr2kKjYIYRM

### Members use the Auction System to Register their Products.

Members can easily add artworks after logging in and a record of the user account email is saved along side the artwork when it is created. This allows the artwork to be editable only by the creator. This was very simple to set up and by far the easiest in comparrison to Express and Vue.

### Customers use the Auction System to Bid on Products.

### A web-based product postage calculator that provides the cost of postage according to size, weight, fragility etc.

### Interactive Elements that Engage the Website User

Svelte does not have its own component library yet so ??? Tailwind? Bootstrap?
Smelte.

### Store and Retrieve data from a server-side database.

The Svelte project uses Firebase and Firestore to store its data. The Firebase suite allows simple connection and communication between the client and the database, potentially removing the need for a seperate back end server. This has probably been the easiest system to get up and running, however, it does have some draw backs and limitations.

- The Databases are effectively flat files which don't allow relational native interactions between entities.
- Many security aspects are handled by firestore, however manually ensuring these settings will take further research.

## Summary

Svelte has been one of the harder frameworks to find tutorials for, likely due to its limited age.
Svelte and Firebase work very well together.
