import { checkError, client } from './client';

export async function getBlogs() {
  //   const resp = await client.from('blogs').select('*');
  const resp = await client.from('blogs').select(`
  *,
  authors (
    name
  )
  `);
  console.log(resp);
  return checkError(resp);
}
