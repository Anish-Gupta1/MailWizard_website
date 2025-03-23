'use client';

import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';


export default function FeedbackSection() {
  const { data: session } = useSession();

  const [newFeedback, setNewFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');



  const submitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || !newFeedback.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newFeedback }),
      });

      if (response.ok) {
        setNewFeedback('');
        setSuccessMessage('Thank you for your review!');
        setTimeout(() => setSuccessMessage(''), 3000);

        // Re-fetch feedbacks after successful submission
      
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Experience</h1>
          <p className="text-gray-600">Help others discover how MailWizard transforms email workflows</p>
        </div>

        {!session ? (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Sign in to Leave Feedback</h2>
            <p className="text-gray-600 mb-6">
              Please sign in with your Google account to share your thoughts.
            </p>
            <button
              onClick={() => signIn('google')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {session.user?.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || ''}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">{session.user?.name}</p>
                  <p className="text-sm text-gray-500">{session.user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="text-sm text-purple-600 hover:underline"
              >
                Sign out
              </button>
            </div>

            <form onSubmit={submitFeedback}>
              <textarea
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                className="w-full p-4 border text-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us how MailWizard has helped you save time..."
                rows={4}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting || !newFeedback.trim()}
                className="mt-4 w-full px-4 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
              </button>
            </form>

            {successMessage && (
              <p className="mt-4 text-green-600 text-center">{successMessage}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}