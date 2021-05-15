const newFormHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#post-title").value.trim();
  const blogContent = document.querySelector("#blog-content").value.trim();

  if (blogTitle && blogContent) {
    const response = await fetch("api/blog/create", {
      method: "POST",
      body: JSON.stringify({ blogTitle, blogContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Oof! Failed to create blog post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/blog");
    } else {
      alert("Oops! Failed to delete blog post!");
    }
  }
};

// const createButtonHandler = async (event) => {
//     console.log("is working?");
//     document.location.replace("/create");
// };

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);

// document
//   .querySelector("create-id")
//   .addEventListener("click", createButtonHandler);