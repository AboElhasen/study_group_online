// Utility to send a notification to the API
export async function sendNotification(message: string, extra: Record<string, any> = {}) {
  await fetch('/api/notification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, ...extra }),
  });
}
