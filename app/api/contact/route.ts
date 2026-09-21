import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@map-airportservices.id";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, company, email, service, message } = await req.json();

    // Validasi basic
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Field nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "MAP Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[MAP Website] Permintaan Layanan — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #001F5B, #1967D2); padding: 24px 32px; border-radius: 10px; margin-bottom: 28px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 700;">✈ Mawaddah Angkasa Prima</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">Pesan masuk dari Website</p>
          </div>

          <!-- Body -->
          <div style="background: #fff; border-radius: 10px; padding: 28px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F172A; font-size: 16px; margin: 0 0 20px; padding-bottom: 16px; border-bottom: 2px solid #f1f5f9;">
              📋 Detail Pesan
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; width: 140px; vertical-align: top; font-weight: 600;">Nama</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Perusahaan</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${company || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #1967D2;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Layanan</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${service || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Pesan</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
          </div>

          <!-- Reply CTA -->
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Permintaan Layanan MAP"
              style="display: inline-block; background: linear-gradient(135deg, #1967D2, #4A9EF5); color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">
              Balas Pesan Ini
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; color: #94A3B8; font-size: 12px; margin-top: 24px;">
            Email ini dikirim otomatis dari form kontak di<br/>
            <strong>contact@map-airportservices.id</strong>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Gagal mengirim email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
