function loadLine() {
  const redDividerLine = `
        <div class="redDividerLine"></div>
    `;

  const containers = document.getElementsByClassName(
    "redDividerLine-container"
  );
  for (let container of containers) {
    container.innerHTML = redDividerLine;
  }
}

document.addEventListener("DOMContentLoaded", loadLine);
