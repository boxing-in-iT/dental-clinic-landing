export const postMessage = async (dataToSend) => {
  try {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
    } else {
      console.error("Failed to send email.");
    }
  } catch (error) {
    console.error("Error while sending email:", error);
  }
};
