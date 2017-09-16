const apiUrl = 'http://192.168.25.232:3000/';

export const api = {
  fetchPins: () => ({
    method: 'GET',
    url: apiUrl,
  }),

  togglePin: (id) => ({
    method: 'PATCH',
    url: `${apiUrl}${id}`,
  }),
};
