import { catdata } from '../../../data/catdata'

export default function handler(req, res) {
  res.status(200).json(catdata)
}