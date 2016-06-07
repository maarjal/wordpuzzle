$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
debugger;
var puzzlewords = $("input#string").val();

  for (var i = 0; i < puzzlewords.length; i++) {
    if (puzzlewords.charAt(i) === "a") {
      puzzlewords = puzzlewords.replace(puzzlewords.charAt(i),"-");
    }
      else if (puzzlewords.charAt(i) === "e") {
        puzzlewords = puzzlewords.replace(puzzlewords.charAt(i),"-");
      }
      else if (puzzlewords.charAt(i) === "i") {
        puzzlewords = puzzlewords.replace(puzzlewords.charAt(i),"-");
      }
      else if (puzzlewords.charAt(i) === "o") {
        puzzlewords = puzzlewords.replace(puzzlewords.charAt(i),"-");
      }
      else if (puzzlewords.charAt(i) === "u") {
        puzzlewords = puzzlewords.replace(puzzlewords.charAt(i),"-");
      }
    }

alert(puzzlewords);
    //
    // $("#output").show();
  });
});
