/** Jump immediately to the document start, even when global CSS uses smooth scrolling. */
export const scrollToPageTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};
