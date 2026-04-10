document.getElementById('activate').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: startTransformation
    });

    document.getElementById('status').innerText = "Статус: РАБОТАЕТ";
    document.getElementById('status').style.color = "#00ff00";
});

function startTransformation() {
    // Эта функция вызовет основной скрипт замены, который мы написали в content.js
    window.runToxicReplacement(); 
}