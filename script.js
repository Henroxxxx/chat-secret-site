function showSecretPrompt() {
  const code = prompt("Entrez le code secret");
  if (code === "1209") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("secret-chat").style.display = "block";
  } else {
    alert("Code incorrect");
  }
}

function leaveChat() {
  document.getElementById("secret-chat").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message !== "") {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.textContent = "Toi : " + message;
    chatBox.appendChild(msgDiv);
    input.value = "";

    // Simuler une réponse automatique
    setTimeout(() => {
      const response = document.createElement("div");
      response.textContent = "Autre : Bien reçu.";
      chatBox.appendChild(response);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
