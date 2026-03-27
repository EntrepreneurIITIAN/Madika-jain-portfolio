from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import resend
import os

app = FastAPI(title="Madika Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RESEND_API_KEY = os.getenv("RESEND_API_KEY", "re_7dh3fZvu_EiApP6EEFXCJjVkNe6kJZFhv")
SENDER_EMAIL = "onboarding@resend.dev"
RECIPIENT_EMAIL = "madikajain24@gmail.com"

resend.api_key = RESEND_API_KEY


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.post("/contact")
async def send_contact(form: ContactForm):
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": "New Contact Message from Madika's Portfolio",
            "html": f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #7e22ce; border-bottom: 2px solid #e11d48; padding-bottom: 10px;">
                    New Contact Message
                </h2>
                <div style="margin: 20px 0;">
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7;">
                        {form.message}
                    </div>
                </div>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                <p style="color: #9ca3af; font-size: 12px;">
                    Sent from Madika Jain's Portfolio Website
                </p>
            </div>
            """,
        }
        email = resend.Emails.send(params)
        return {"success": True, "message": "Email sent successfully", "id": email.get("id")}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "ok"}
