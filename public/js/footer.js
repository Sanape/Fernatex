function copy(target) {
  console.log(target);
  var copy_text = target;

  selection = window.getSelection(); // Save the selection.
  range = document.createRange();
  range.selectNodeContents(copy_text);
  selection.removeAllRanges(); // Remove all ranges from the selection.
  selection.addRange(range);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg + '\t' + copy_text);
  } catch (err) {
    console.log('Oops, unable to copy' + '\t' + copy_text);
  }
  selection.removeAllRanges();
  alert('Copiado al porta papeles');
}
