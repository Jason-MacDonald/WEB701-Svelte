<script>
  let email;
  let password;
  let firstName;
  let lastName;
  let accounts = [
    {
      email: "user1@email.com",
      password: "P@ssword1",
      firstName: "User",
      lastName: "One"
    },
    {
      email: "user2@email.com",
      password: "P@ssword2",
      firstName: "User",
      lastName: "Two"
    },
    {
      email: "user3@email.com",
      password: "P@ssword3",
      firstName: "User",
      lastName: "Three"
    }
  ];
  let currentAccount;

  const login = () => {
    let account = accounts.filter(
      account => account.email == email && account.password == password
    );
    currentAccount = account[0];

    firstName = currentAccount.firstName;
    lastName = currentAccount.lastName;
  };

  const update = () => {
    let index = accounts.findIndex(
      account => account.email == currentAccount.email
    );
    console.log(index);
    accounts[index].firstName = firstName;
    accounts[index].lastName = lastName;
  };
</script>

<form on:submit|preventDefault={login}>
  <input type="email" bind:value={email} />
  <input type="password" bind:value={password} />
  <button>Login</button>
</form>

{#if currentAccount != null}
  <form on:submit|preventDefault={update}>
    <p>Current Account:</p>
    <input disabled value={currentAccount.email} />
    <input bind:value={firstName} />
    <input bind:value={lastName} />
    <button>Update</button>
  </form>
{/if}
