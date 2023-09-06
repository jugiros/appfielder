export async function validUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {method: 'HEAD'});
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}