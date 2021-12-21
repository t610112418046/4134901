function clickMe() {
    return alert("Hello")
}
function RanderTable(bns) {
    return bns.map((bn) => {
        const {id, brand} = bn;
        return(
            <tr>
                <td>
                    {id}
                </td>
                <td>{brand}</td>
                <td><button onClick={()=>clickMe()}>ok</button></td>
            </tr>
        )
    })
}

function DataTable() {
    const bn = [
        { id: 1, brand: "Toyota" },
        { id: 2, brand: "Mazda" },
        { id: 3, brand: "Kubota" },
    ];
    return(
        <table>
            <tbody>{RanderTable(bn)}</tbody>  
        </table>
    )
}

export default DataTable;