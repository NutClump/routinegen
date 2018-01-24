const path_map = {
  "LB1": "1",
  "LB2": "2",
  "LB3": "3",
  "LI1": "4",
  "LI2": "5",
  "LI3": "6",
  "PB1": "7",
  "PB2": "8",
  "PB3": "9",
  "PB4": "10",
  "PI1": "11",
  "PI2": "12",
  "PI3": "13",
  "PI4": "14",
};
var category = null;
var proficiency = null;
var attr = null;

function isFormComplete() {
  return (category != null && proficiency != null && attr != null);
}

function onFormComplete() {
  $('#dyn-span2').html(`<a class="waves-effect waves-light grey lighten-5 btn" id="generate-btn">
    <span class="btn-text">Generate Routine!</span>
  </a>`);
  $("#generate-btn").click(function(e){
    const str = "" + category + proficiency + attr.toString();
    e.preventDefault();
    if (path_map[str] == undefined) {
      alert('your personalized routine is not out yet. Downloading default instead');
      window.location.href = `routines/routine1.xlsx`
    } else {
      window.location.href = `routines/routine${path_map[str]}.xlsx`
    }
  });
}

function onCategoryChange(val) {
  var options = '';
  if (val == 'P') {
    options = `<option value="1">Power</option>
        <option value="2">Strength</option>
        <option value="3">Bodyweight</option>
        <option value="4">Endurance</option>`;
  } else {
    options = `<option value="1">Upper Body</option>
        <option value="2">Lower Body</option>
        <option value="3">Balanced Full Body</option>`;
  }
  $('#dyn-span').html(`<select id="attribute-s" onchange="onAttributeChange(this.value)">
      <option value="" disabled selected></option>${options}</select>`);
  $('#attribute-s').material_select();
  category = val;
  if (isFormComplete()) onFormComplete();
}
function onProficiencyChange(val) {
  proficiency = val;
  if (isFormComplete()) onFormComplete();
}
function onAttributeChange(val) {
  attr = val;
  if (isFormComplete()) onFormComplete();
}
$(document).ready(function() {
  $('#dyn-span').html(`<select disabled></select>`);
  $('select').material_select();
});
