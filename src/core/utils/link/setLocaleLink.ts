export const setLocaleLink = (data: { locale: string; link: string }) => {
  return `/${data.locale}${data.link}`;
};
