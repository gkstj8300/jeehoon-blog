const convertToSlug = (title: string) => {
    return title.replace(/[ ?!]/g, '-');
};
  
export default convertToSlug;