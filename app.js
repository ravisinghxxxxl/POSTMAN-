console.log("start");

// UTILITY FUNCTION   GET DOM ELEMENT FROM STRING
function getElemFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

var paramBox = document.getElementById("parameterBox");
var jsonBox = document.getElementById("reqJsonBox");

// HIDE THE PARAMETER BOX INITIALLY
paramBox.style.display = "none";

// IF USER CLICKS ON JSON RADIO HIDE THE PARAMS BOX
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  paramBox.style.display = "none";
  jsonBox.style.display = "block";
});

// IF USER CLICKS ON PARAMS HIDE THE JSON BOX
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  jsonBox.style.display = "none";
  paramBox.style.display = "block";
});

// IF USER CLICKES ON + BUTTON ADD MORE PARAMETERS
let addedParamCount = 0;
let addParam = document.getElementById("addParams");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let paramsString = `<div class="form-row row">
    <label for="url" class="form-label"><strong>Parameter
    ${addedParamCount + 2} </strong></label>

<div class="col-md-4">
    <input type="email" autocomplete="okay"
        class="form-control" id="paramKey${addedParamCount + 2}"
        placeholder="Enter parameter key ${addedParamCount + 2}">
</div>
<div class="col-md-4">
    <input type="password" autocomplete="okay"
        class="form-control" id="paramVal${addedParamCount + 2}"
        placeholder="Enter parameter value ${addedParamCount + 2}">
</div> 
<div class="col-md-4">
    <button class="btn btn-primary delParams">-</button>
</div>
</div>`;

  // CONVERT ELEMENT STRING TO DOM NODE
  let paramElem = getElemFromString(paramsString);
  params.appendChild(paramElem);

  //  TO DELETE PARAMETERS
  let delParams = document.getElementsByClassName("delParams");
  for (items of delParams) {
    items.addEventListener("click", e => {
      e.target.parentElement.parentElement.remove();
    });
}
addedParamCount++;
});
