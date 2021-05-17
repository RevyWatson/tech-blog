//This doesn't work. Can't figure out why.
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${blog.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/blog");
    } else {
      alert("Oops! Failed to delete blog post!");
    }
  }
};

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);
