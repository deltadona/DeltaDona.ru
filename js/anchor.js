const handleClick = (event) => {
  event.preventDefault();
  const contentAnchors = document.querySelectorAll(".anchor-hash-content");
  const href = event.target.getAttribute("href");
  const navBar = document.querySelector(".navbar");
  const headerOffset = navBar.clientHeight + 10;

  const elementToScroll = Array.from(contentAnchors).filter((item) =>
    href.includes(item.getAttribute("id"))
  );

  const elementPosition = elementToScroll[0].offsetTop;

  window.scrollTo({
    top: elementPosition - headerOffset,
    behavior: "smooth",
  });
};

document
  .querySelectorAll(".anchor-hash-header")
  .forEach((item) => item.addEventListener("click", handleClick));
