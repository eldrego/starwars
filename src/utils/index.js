export const convertDate = () => {
  const sections = '1977-05-25'.split('-');
  return new Date(sections[0], sections[1] - 1, sections[2]);
};
