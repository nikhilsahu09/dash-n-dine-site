const feedbackForm = document.getElementById("feedback-form");
const formNotice = document.getElementById("form-notice");

if (feedbackForm && formNotice) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("type").value;
    const subject = document.getElementById("subject").value.trim();
    const details = document.getElementById("details").value.trim();

    if (!subject || !details) {
      formNotice.textContent = "Add a summary and details to preview your feedback.";
      formNotice.hidden = false;
      return;
    }

    formNotice.textContent =
      "Preview only — not sent or saved. Type: " + type +
      " | Summary: " + subject + " | Details: " + details;
    formNotice.hidden = false;
  });
}
