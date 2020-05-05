<script>
  let accounts = [];

  let email;
  let password;

  const register = () => {
    let account = {
      email: email,
      password: password
    };
    accounts = [...accounts, account];
  };
</script>

<form on:submit|preventDefault={register}>
  <input type="email" bind:value={email} />
  <input type="password" bind:value={password} />
  <button>Register</button>
</form>

<div>
  {#each accounts as account}
    <div>
      <input disabled value={account.email} />
      <input disabled value={account.password} />
    </div>
  {/each}
</div>
