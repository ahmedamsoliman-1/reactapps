const API_URL = 'https://api.example.com';

export const fetchItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
