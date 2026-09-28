import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const AIRPORT_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@map-airportservices.id";
const TRAINING_EMAIL = process.env.TRAINING_CONTACT_TO_EMAIL || "trainingcenter@map-airportservices.id";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, company, email, service, message, source } = await req.json();

    // Validasi basic
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Field nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const isTraining =
      source === "training" ||
      service?.toLowerCase().includes("training") ||
      service?.toLowerCase().includes("diklat") ||
      service?.toLowerCase().includes("avsec") ||
      service?.toLowerCase().includes("maintenance") ||
      service?.toLowerCase().includes("pramugari");

    const targetEmail = isTraining ? TRAINING_EMAIL : AIRPORT_EMAIL;

    const subject = isTraining
      ? `[MAP Training Center] Pendaftaran & Konsultasi - ${name}`
      : `[MAP Airport Services] Permintaan Layanan - ${name}`;

    const headerTitle = isTraining ? "🎓 MAP Training Center" : "✈ Mawaddah Angkasa Prima";
    const headerSubtitle = isTraining
      ? "Formulir Pendaftaran & Konsultasi Diklat"
      : "Pesan Masuk Layanan Bandara";
    const headerGradient = isTraining
      ? "linear-gradient(135deg, #001F5B, #F5A623)"
      : "linear-gradient(135deg, #001F5B, #1967D2)";

    const companyLabel = isTraining ? "Asal Sekolah / Instansi" : "Perusahaan / Maskapai";
    const serviceLabel = isTraining ? "Program Pelatihan" : "Layanan yang Diminati";

    const { data, error } = await resend.emails.send({
      from: "MAP Website <onboarding@resend.dev>",
      to: targetEmail,
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          
          <!-- Header -->
          <div style="background: ${headerGradient}; padding: 28px 32px; border-radius: 10px; margin-bottom: 28px; text-align: center; color: #fff;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 800;">${headerTitle}</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px;">${headerSubtitle}</p>
          </div>

          <!-- Body -->
          <div style="background: #fff; border-radius: 10px; padding: 28px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h2 style="color: #0F172A; font-size: 16px; margin: 0 0 20px; padding-bottom: 16px; border-bottom: 2px solid #f1f5f9;">
              📋 Detail Formulir Pendaftaran / Pesan
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; width: 160px; vertical-align: top; font-weight: 600;">Nama Lengkap</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 700;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">${companyLabel}</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px;">${company || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Email Pengirim</td>
                <td style="padding: 10px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #1967D2; font-weight: 600; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">${serviceLabel}</td>
                <td style="padding: 10px 0; color: #1967D2; font-size: 14px; font-weight: 700;">${service || "-"}</td>
              </tr>
              <tr style="border-top: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; vertical-align: top; font-weight: 600;">Pesan / Pertanyaan</td>
                <td style="padding: 10px 0; color: #0F172A; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
          </div>

          <!-- Reply CTA -->
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Pendaftaran MAP Training Center - ${name}"
              style="display: inline-block; background: linear-gradient(135deg, #001F5B, #1967D2); color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 700; font-size: 14px;">
              Balas Pesan / Email Ini
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; color: #94A3B8; font-size: 12px; margin-top: 28px;">
            Email ini dikirim otomatis via Resend dari Website resmi<br/>
            <strong>PT Mawaddah Angkasa Prima</strong>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Gagal mengirim email via Resend." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
