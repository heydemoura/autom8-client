export const apiUrl = 'http://192.168.25.232:4000/';
export const socketUrl = 'http://192.168.25.232:3001';

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
