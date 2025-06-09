
export default async function handler(req, res) {
  const servers = [
    { name: "Vultr", cpu: 4, ram: 16, storage: 500, price: 80, location: "North America", link: "https://www.vultr.com/?ref=affiliate123" }
  ];
  res.status(200).json(servers);
}
