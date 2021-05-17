//none of this works. Can't figure out why.
const createButtonHandler = async (event) => {
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

document
    .querySelector("#create-id")
    .addEventListener("click", createButtonHandler);

document
    .querySelector(".new-post-form")
    .addEventListener("submit", createButtonHandler);