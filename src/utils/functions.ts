export async function validUrl(url: string, index: number): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
}