import axios from "axios";

export const sendToPost = async (dataToSend) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/send-email",
      dataToSend,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Email sent successfully!");
    } else {
      console.error("Failed to send email.");
    }
  } catch (error) {
    console.error("Error while sending email:", error);
  }
};
