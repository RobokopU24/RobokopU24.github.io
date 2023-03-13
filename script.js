window.addEventListener("load", () => {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("form-submit-button");
  const formResponseMessage = document.getElementById("form-response");

  // TODO: Show error state in UI
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    submitButton.disabled = true;

    await fetch(action, {
      method: "POST",
      body: data,
    })

    form.reset();
    submitButton.disabled = false;
    formResponseMessage.style.display = "block";
  });
});
