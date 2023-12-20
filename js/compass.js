function openNewPage(selectElement) {
  // Get the selected option value
  var selectedOption = selectElement.value;

  // Check if a valid option is selected
  if (selectedOption) {
      // Open the new page based on the selected option
      window.location.href = selectedOption + ".html"; // Change the extension as needed
  }
}
function showDialog() {
  let dialog = document.getElementById('dialog');
  dialog.classList.remove('hidden');
  setTimeout(() => {
    dialog.classList.remove('opacity-0');
  }, 20);
}

function hideDialog() {
  let dialog = document.getElementById('dialog');
  dialog.classList.add('opacity-0');
  setTimeout(() => {
    dialog.classList.add('hidden');
  }, 500);
}
