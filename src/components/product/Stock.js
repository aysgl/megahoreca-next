export default function Stock({ stock }) {
    return (
        <p className="text-success small mb-2">
            <i style={{ fontSize: "9px" }} className="icon-Varlk-41 pe-2" />
            laatste {stock} stuks
        </p>
    )
}
