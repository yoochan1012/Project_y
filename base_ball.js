const tktt = [
    {
        id: 0,
        type: "VIP",
        weekday: 70000,
        weekend: 70000
    }
]

let $table = document.querySelector('table');

tktt.map(tkt=>{
    let $tr = document.createElement('tr');
    for (let k in tktt){
        let $td = document.createElement('td');
        $td.innerHTML = tkt[k];
        $tr.appendChild($td);
        $table.appendChild($tr);
    }
})

document.body.appendChild($table);