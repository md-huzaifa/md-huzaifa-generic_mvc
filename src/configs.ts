const SERVER_URL = import.meta.env.VITE_PUBLIC_SERVER_URL;

if (!SERVER_URL) {
  console.error("ENV vars not found");
}
export const configs = {
  SERVER_URL,
};
