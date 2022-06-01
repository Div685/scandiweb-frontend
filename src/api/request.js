export const getData = async () => {
  const url = 'http://localhost:8000/api/read.php';
  const request = await fetch(url, { mode: 'cors' });
  if (request.status === 200) {
    const data = await request.json();
    return data;
  }
  throw Error(404);
}
