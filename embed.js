(function () {
  // Prevent double initialization
  if (window.jaiBookerWidgetLoaded) return;
  window.jaiBookerWidgetLoaded = true;

  // -----------------------------
  // Create iframe popup
  // -----------------------------
  const iframe = document.createElement("iframe");
  iframe.src = "https://bilal-abubaker.github.io/jai-booker/index.html";
  iframe.id = "jaiBookerFrame";
  iframe.style.cssText = `
    display:none;
    position:fixed;
    top:0; left:0;
    width:100vw; height:100vh;
    border:0;
    background:white;
    z-index:999999999;
  `;
  document.body.appendChild(iframe);

  // -----------------------------
  // Function to open widget
  // -----------------------------
  function openBookingWidget() {
    iframe.style.display = "block";
  }

  // -----------------------------
  // Function to close widget
  // -----------------------------
  window.closeJaiBooker = function () {
    iframe.style.display = "none";
  };

  // -----------------------------
  // Listen for clicks on ANY element
  // with the class .open-booking-form
  // -----------------------------
  document.addEventListener("click", function (event) {
    if (event.target.closest(".open-booking-form")) {
      openBookingWidget();
    }
  });
})();
