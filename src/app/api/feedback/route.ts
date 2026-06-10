import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { type, comment, slug, title } = await req.json();

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn('⚠️ DISCORD_WEBHOOK_URL no está configurada en .env.local');
      return NextResponse.json({ 
        success: true, 
        message: 'Feedback recibido localmente (falta configurar DISCORD_WEBHOOK_URL en el servidor)' 
      });
    }

    // Color: emerald/verde para Thumbs Up (65280), rose/rojo para Thumbs Down (16711830)
    const color = type === 'up' ? 1049361 : 16020574;
    const ratingIcon = type === 'up' ? '👍 ¡Útil / Me gusta!' : '👎 No útil / Requiere mejoras';

    const embed = {
      title: '📝 Nuevo Feedback Recibido - ZenForge Docs',
      description: `Un usuario ha dejado una calificación en la documentación.`,
      color: color,
      fields: [
        {
          name: '📄 Página',
          value: `**[${title}](http://localhost:3000/docs/${slug})**\n*(Ruta: /docs/${slug})*`,
          inline: false
        },
        {
          name: '⭐ Calificación',
          value: ratingIcon,
          inline: true
        },
        {
          name: '💬 Comentario / Sugerencia',
          value: comment ? `\`\`\`\n${comment}\n\`\`\`` : '*No se incluyó ningún comentario.*',
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: 'ZenForge Studios Wiki Feedback Monitor',
        icon_url: 'https://raw.githubusercontent.com/ZenForge-Studios/.github/main/profile/logo.png' // Fallback to profile logo if exists
      }
    };

    const discordPayload = {
      embeds: [embed]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordPayload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('❌ Error al enviar webhook a Discord:', errText);
      return NextResponse.json({ success: false, error: 'Error al enviar a Discord' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ Error en el API de feedback:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
