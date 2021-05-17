console.log('start');       

var paramBox = document.getElementById('parameterBox');
var jsonBox = document.getElementById('reqJsonBox');

// HIDE THE PARAMETER BOX INITIALLY 
paramBox.style.display = 'none';

// IF USER CLICKS ON JSON RADIO HIDE THE PARAMS BOX
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    paramBox.style.display = 'none';
    jsonBox.style.display = 'block';
})

// IF USER CLICKS ON PARAMS HIDE THE JSON BOX
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    jsonBox.style.display = 'none';
    paramBox.style.display = 'block';
})

// IF USER CLICKES ON + BUTTON ADD MORE PARAMETERS
let addParam = document.getElementById('addParams');
let addedParamCount = 0;
addParam.addEventListener('click', ()=> {
let params = document.getElementById('params').innerHTML = `   <div class="form-row row">
<div>
    <label for="url" class="form-label"><strong>Parameter
    ${addedParamCount+2} </strong></label>
</div>

<div class="col-md-4">
    <input type="email" autocomplete="okay"
        class="form-control" id="paramKey1"
        placeholder="Enter parameter key ${addedParamCount+2}">
</div>
<div class="col-md-4">
    <input type="password" autocomplete="okay"
        class="form-control" id="paramVal1"
        placeholder="Enter parameter value ${addedParamCount+2}">
</div>
<div class="col-md-4">
    <button id="addParams" class="btn btn-primary">-</button>
</div>
</div>
`;
addedParamCount++;
})