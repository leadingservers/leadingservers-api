
export default async function handler(req, res) {
  const vultrServers = await (await fetch("https://your-vercel-url/api/vultr")).json();
  const contaboServers = await (await fetch("https://your-vercel-url/api/contabo")).json();
  const allServers = [...vultrServers, ...contaboServers];
  res.status(200).json(allServers);
}
