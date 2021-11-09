chrome.runtime.onMessage.addListener(function(message, sender)
{
    if(!message.run) return;

    const data = message.data;
    console.log(data);
});