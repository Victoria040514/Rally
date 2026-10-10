
console.log("Rally JavaScript is running");

// Select the button
const copyButton = document.querySelector("#copy-link");

// Define the function
async function copyWebsiteLink() {
  const websiteLink = window.location.href;

  try {
    await navigator.clipboard.writeText(websiteLink);

    copyButton.textContent = "Copied!";

    setTimeout(function () {
      copyButton.textContent = "Copy website link";
    }, 2000);

  } catch (error) {
    console.error("Copy failed:", error);

    copyButton.textContent = "Copy failed";

    setTimeout(function () {
      copyButton.textContent = "Copy website link";
    }, 2000);
  }
}

// Listen for a click
copyButton.addEventListener("click", copyWebsiteLink);
