export default function handler(req, res) {
    const url = "https://jsonplaceholder.typicode.com/users"
    res.status(200).json(url)
}