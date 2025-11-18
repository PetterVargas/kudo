'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 rounded-md px-3',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'sm',
    },
  }
);

export interface RateProps {
  onRateAction?: (url: string, feedback: { rating: 'good' | 'bad'; message?: string }) => Promise<void>;
}

export function Rate({ onRateAction }: RateProps): React.ReactElement {
  const [rating, setRating] = useState<'good' | 'bad' | null>(null);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = async (newRating: 'good' | 'bad') => {
    const url = window.location.pathname;
    
    // Check if already rated this page
    const ratedPages = JSON.parse(localStorage.getItem('rated-pages') || '[]');
    if (ratedPages.includes(url)) {
      return;
    }

    setRating(newRating);
    
    if (newRating === 'bad') {
      setShowMessage(true);
    } else {
      await submitFeedback(newRating, '');
    }
  };

  const submitFeedback = async (finalRating: 'good' | 'bad', finalMessage: string) => {
    const url = window.location.pathname;
    
    try {
      if (onRateAction) {
        await onRateAction(url, {
          rating: finalRating,
          message: finalMessage || undefined,
        });
      }

      // Mark page as rated
      const ratedPages = JSON.parse(localStorage.getItem('rated-pages') || '[]');
      ratedPages.push(url);
      localStorage.setItem('rated-pages', JSON.stringify(ratedPages));
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleMessageSubmit = async () => {
    if (rating) {
      await submitFeedback(rating, message);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 mt-8">
        <p className="text-sm text-muted-foreground">
          ¡Gracias por tu feedback! Nos ayuda a mejorar la documentación.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 mt-8">
      <div className="space-y-4">
        {!rating && (
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium">¿Te ha resultado útil esta página?</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleRate('good')}
                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Sí
              </button>
              <button
                onClick={() => handleRate('bad')}
                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No
              </button>
            </div>
          </div>
        )}

        {rating && showMessage && !submitted && (
          <>
            <p className="text-sm font-medium">¿Podrías contarnos qué podríamos mejorar?</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tu comentario nos ayuda a mejorar..."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div className="flex gap-2">
              <button
                onClick={handleMessageSubmit}
                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Enviar
              </button>
              <button
                onClick={() => submitFeedback(rating, '')}
                className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
              >
                Omitir
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}