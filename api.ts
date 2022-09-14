const api = {
  translations: {
    fetch: async (locale: string = "en-US") => {
      const translations: Record<string, string> = await import(`./translations/${locale}`).then(
        (res) => res.default,
      );

      return translations;
    },
  },
};

export default api;
