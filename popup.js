let generateButton = document.getElementById("generate");
let lookFor = document.getElementById("search");

generateButton.addEventListener("click", async () =>
{
    chrome.runtime.sendMessage(
    { run: true, data:
        {
            search: lookFor.value,
        }
    });
});