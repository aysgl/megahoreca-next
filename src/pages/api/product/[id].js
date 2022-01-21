import { prodata } from '../../../data/prodata'

export default function productHandler({ query: { id } }, res) {
  // const url = "https://jsonplaceholder.typicode.com/users"
  const filtered = prodata.filter((p) => p.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Products with id: ${id} not found.` })
  }
}