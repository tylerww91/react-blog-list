import { checkError, client } from './client';

export async function getBlogs() {
  const resp = client.from('blogs').select('*');
  return checkError(resp);
}
