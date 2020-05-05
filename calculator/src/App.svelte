<script>
  let height = 1;
  let width = 1;
  let length = 1;
  let weight = 1;
  let fragility = 1;
  let zone = 1;

  let freightCost;

  const calculateFreight = () => {
    freightCost = 0;

    if (isOversize() == true) {
      freightCost += 20; // $
    }
    console.log(freightCost);
    freightCost += getWeightCost();
    freightCost += getFragilityCost();
    freightCost += getZoneCost();
  };

  function getZoneCost() {
    if (zone == 1) return 0;
    else if (zone == 2) return 5;
    else if (zone == 3) return 10;
    else if (zone == 4) return 20;
  }

  function getFragilityCost() {
    if (fragility == 1) return 0;
    else if (fragility == 2) return 10;
    else if (fragility == 3) return 50;
    else if (fragility == 4) return 100;
    else if (fragility == 5) return 500;
    else return 0;
  }

  function getWeightCost() {
    if (weight < 5) return 5;
    else if (weight < 10) return 10;
    else if (weight < 15) return 15;
    else if (weight < 20) return 20;
    else if (weight < 25) return 25;
    else return 150;
  }

  function isOversize() {
    if (height > 2000 || width > 2000 || length > 2000) return true;
    else return false;
  }
</script>

<div>
  <form>
    <p>
      <input type="number" bind:value={height} min="1" />
      Height: (cm)
    </p>
    <p>
      <input type="number" bind:value={width} min="1" />
      Width: (cm)
    </p>
    <p>
      <input type="number" bind:value={length} min="1" />
      Length: (cm)
    </p>
    <p>
      <input type="number" bind:value={weight} min="1" />
      Weight: (kg)
    </p>
    <p>
      <input type="number" bind:value={fragility} min="0" max="5" />
      Fragility: 0 - 5
    </p>
    <p>
      <input type="number" bind:value={zone} min="1" max="4" />
      Zone: (1 - 4)
    </p>
    <form />
  </form>
</div>

<div>
  <form on:submit|preventDefault={calculateFreight}>
    <input bind:value={freightCost} />
    <button>Calculate Freight</button>
    <form />
  </form>
</div>
