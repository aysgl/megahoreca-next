import { megamenu } from '../../../data/megamenu'

export default function handler(req, res) {
  res.status(200).json(megamenu)
}