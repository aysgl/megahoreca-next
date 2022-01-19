import { megamenu } from '../../../data/megamenu'

export default function categoryHandler({ query: { id } }, res) {
  const filtered = megamenu.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Category with id: ${id} not found.` })
  }
}