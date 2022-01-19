import { people } from '../../../data/person'

export default function handler(req, res) {
    res.status(200).json(people)
}