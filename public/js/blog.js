const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blogTitle = document.querySelector("#blogTitle").value.trim();
    const blogContent = document.querySelector("#blogContent").value.trim();
  
    if (blogTitle && blogContent) {
      const response = await fetch(`/api/blog`, {
        method: "POST",
        body: JSON.stringify({ blogTitle, blogContent }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/blog");
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
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);