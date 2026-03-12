export default function sitemap() {
  const baseUrl = "https://www.metodogold.it";
  const lastModified = new Date();

  const routes = [
    "",
    "/chi-sono",
    "/chi-sono/il-metodo-gold",
    "/corsi",
    "/promo",
    "/eventi",
    "/media",
    "/contatti",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}