if (typeof document !== "undefined") {
  const anio = document.querySelector("#anio");

  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
}
