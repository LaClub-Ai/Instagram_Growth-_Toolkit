export async function followUsers(username: string, password: string, targets: string[]) {
  const res = await fetch('/api/follow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, targets }),
  });
  return res.json();
}