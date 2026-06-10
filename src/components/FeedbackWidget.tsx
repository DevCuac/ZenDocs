'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackWidgetProps {
  slug: string;
  title: string;
}

export function FeedbackWidget({ slug, title }: FeedbackWidgetProps) {
  const [selection, setSelection] = useState<'up' | 'down' | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: selection,
          comment: comment.trim(),
          slug,
          title,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error al enviar el feedback');
      }
    } catch (err) {
      console.error('Error de red al enviar el feedback', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-12 p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-center flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        <div>
          <h4 className="font-bold text-emerald-300 text-lg">¡Muchas gracias por tu feedback!</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Tus comentarios han sido enviados directamente a nuestro canal de Discord para ayudarnos a seguir mejorando.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 rounded-xl border border-fd-border bg-fd-card/50 backdrop-blur-sm shadow-xl flex flex-col gap-4 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-base text-fd-foreground">¿Te resultó útil esta página?</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Tus respuestas nos ayudan a perfeccionar la wiki de ZenForge.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelection(selection === 'up' ? null : 'up')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
              selection === 'up'
                ? 'bg-blue-500/10 border-blue-500 text-cyan-400 shadow-md shadow-blue-500/10'
                : 'border-fd-border hover:bg-fd-accent/40 text-muted-foreground hover:text-fd-accent-foreground'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Sí</span>
          </button>

          <button
            onClick={() => setSelection(selection === 'down' ? null : 'down')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
              selection === 'down'
                ? 'bg-rose-500/10 border-rose-500 text-rose-400 shadow-md shadow-rose-500/10'
                : 'border-fd-border hover:bg-fd-accent/40 text-muted-foreground hover:text-rose-400'
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            <span>No</span>
          </button>
        </div>
      </div>

      {selection && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mt-2 border-t border-fd-border/50 pt-4 animate-in slide-in-from-top-2 duration-200"
        >
          <label className="text-xs font-medium text-fd-foreground">
            {selection === 'up'
              ? '¿Hay algo específico que te haya gustado o quieras sugerir? (Opcional)'
              : '¿Qué información faltó, o cómo podemos mejorar esta sección?'}
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required={selection === 'down'}
            placeholder={
              selection === 'up'
                ? 'Escribe tu comentario aquí...'
                : 'Ej: Los comandos de recompensas del archivo streak-menu.yml no están claros...'
            }
            rows={3}
            className="w-full text-sm p-3 rounded-lg border border-fd-border bg-fd-background/50 focus:border-blue-500/70 focus:outline-none transition-all placeholder:text-muted-foreground/60 resize-none text-fd-foreground"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading || (selection === 'down' && !comment.trim())}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white font-semibold rounded-lg text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span>Enviar Feedback</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
