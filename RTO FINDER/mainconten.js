const inputel = document.querySelector("input");
const sweet = document.getElementById("sweet");
async function getJSONData() {
  const response = await fetch("./data.json");
  return await response.json();
}

const searchrecord = async (value) => {
  console.log("I GOT THIS VALUE!", value.toUpperCase());

  const jsonData = await getJSONData();

  console.log(jsonData);

  const valuegot = jsonData.find(
    (record) => record.RTOCODE === value.toUpperCase()
  );

  console.log(valuegot);

  const resultfound = document.querySelector("#resultsection");
  if (valuegot) {
    resultfound.classList.remove("hidden");
    resultfound.querySelector("#query").innerText = value.toUpperCase();
    resultfound.querySelector("#rto-id").innerText = valuegot.ID;
    resultfound.querySelector("#rto-code").innerText = valuegot.RTOCODE;
    resultfound.querySelector("#rto-location").innerText = valuegot.location;
    resultfound.querySelector("#rto-type").innerText = valuegot.type;
    resultfound.querySelector("#rto-district").innerText = valuegot.district;
  } else {
    resultfound.classList.add("hidden");
  }
};

inputel.addEventListener("keyup", (e) => {
  // console.log(e);
  console.log(e.target.value);
  if (e.key === "Enter") {
    console.log("enter");
    if (inputel.value.length > 3) {
      console.log("validate");
      searchrecord(inputel.value.toUpperCase());
    }
  }
});