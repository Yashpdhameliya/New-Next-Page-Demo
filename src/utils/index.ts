export const slugify = (str: string) =>
  str
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^\w\s-]/g, "")
    ?.replace(/[\s_-]+/g, "-")
    ?.replace(/^-+|-+$/g, "");


export const scrollToTop = () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("beforeunload", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
