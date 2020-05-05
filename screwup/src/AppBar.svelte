<script>
  import firebase from "firebase";

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("User signed out.");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
</script>

<style>
  .app-bar {
    background-color: rgb(34, 148, 148);
    height: 75px;
    display: flex;
    justify-content: flex-end;
  }
  button {
    color: white;
    height: 75px;
    padding: 0px 50px 0px 50px;
    font-size: 30px;

    background: none;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }

  button:hover {
    background: rgb(38, 167, 167);
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }
</style>

<div class="app-bar">
  <button on:click={signOut}>Logout</button>
</div>
