let generateButton = document.getElementById("generate");
let lookFor = document.getElementById("search");
let resultText = document.getElementById("result");

generateButton.addEventListener("click", async () =>
{
    resultText.innerHTML = "Loading..";

    chrome.runtime.sendMessage(
    { run: true, data:
        {
            popup: true,
            search: lookFor.value
        }
    });
});

chrome.runtime.onMessage.addListener(function(message, sender)
{
    if(!message.run) return;
    if(message.data.popup) return;

    resultText.innerHTML = message.data.result + ".onion";
    document.getElementById("key").innerHTML = message.data.key;
});