$(document).ready(function() {
const age = parseInt(prompt("You have to be 18 to vote! Are YOUUUUU 18 enough? Enter your age."));

if (age >= 18) {
  $('#over-18').show();
} else {
  $('#under-18').show();
};
});