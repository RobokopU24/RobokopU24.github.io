const RECAPTCHA_PUBLIC_KEY = "6LcMQR4lAAAAAB5Ilnu7XYiXyb3uY7mHh44fhBk0";

window.addEventListener("load", () => {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("form-submit-button");
  const formResponseMessage = document.getElementById("form-response");
  const tokenField = document.getElementById("token");

  // TODO: Show error state in UI
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitButton.disabled = true;

    grecaptcha.ready(() => {
      grecaptcha
        .execute(RECAPTCHA_PUBLIC_KEY, { action: "submit_form" })
        .then(async (token) => {
          tokenField.value = token;

          const data = new FormData(form);
          const action = e.target.action;

          await fetch(action, {
            method: "POST",
            body: data,
          });

          form.reset();
          submitButton.disabled = false;
          formResponseMessage.style.display = "block";
        });
    });
  });
});
