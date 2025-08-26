const API_URL = 'https://aztro.sameerkumar.website';

export const getHoroscope = async (sign, day) => {
  try {
    const response = await fetch(`${API_URL}?sign=${sign}&day=${day}`, {
      method: 'POST'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch horoscope:", error);
    throw error;
  }
};
