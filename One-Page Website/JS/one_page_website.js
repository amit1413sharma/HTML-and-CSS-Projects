document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  // Open lightbox when image is clicked
  const images = document.querySelectorAll(".lightbox-trigger");
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const largeImgSrc = img.getAttribute("data-large");
      lightboxImg.src = largeImgSrc;
      lightbox.style.display = "block";
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
