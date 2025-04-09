import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/nodejs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID!;
    const templateId = process.env.EMAILJS_TEMPLATE_ID!;
    const userId = {
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    };

    const templateParams = {
      name,
      email,
      message,
      destinationEmail: process.env.CONTACT_DESTINATION!,
    };

    await emailjs.send(serviceId, templateId, templateParams, userId);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch {
    return res.status(500).json({ message: "Failed to send email" });
  }
}
