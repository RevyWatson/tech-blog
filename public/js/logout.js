const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      // setTimeout(() => {
      //   console.log("Can you just do the thing!");
        document.location.replace("/");
      // }, 1000);
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector("#exit").addEventListener("click", logout);