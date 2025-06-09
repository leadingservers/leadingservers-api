
export default async function handler(req, res) {
  const servers = [
    { name: "Contabo", cpu: 6, ram: 32, storage: 1600, price: 90, location: "Europe", link: "https://contabo.com/?affiliate=xyz" }
  ];
  res.status(200).json(servers);
}
