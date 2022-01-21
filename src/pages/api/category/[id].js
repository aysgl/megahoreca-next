import { catdata } from '../../../data/catdata'

export default function categoryHandler({ query: { id } }, res) {
  const filtered = catdata.filter((p) => p.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Category with id: ${id} not found.` })
  }
}