export function main(value, valid) {
  const button = document.createElement("button");
  button.innerText = "Run Function";
  button.onclick = () => generateDOM(value);
  const appEl = document.getElementById("app");
  appEl.innerHTML = `<h1>Hello World!</h1>`;
  function generateDOM() {
    appEl.innerHTML = `
        <h1>Output below:</h1>
        <div style="color: ${valid ? "green" : "red"}"> 
        ${valid ? "VALID OUTPUT" : "INVALID OUTPUT"}:
        <pre>${JSON.stringify(value, null, 4)}</pre>
        </div>
      `;
  }

  appEl.appendChild(button);
}
