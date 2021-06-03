const ticket = [
            {
                id: 0,
                type: "VIP",
                weekday: 70000,
                weekend: 70000
            },
            {
                id: 1,
                type: "table",
                weekday: 43000,
                weekend: 48000
            },
            {
                id: 2,
                type: "exciting",
                weekday: 23000,
                weekend: 28000
            },
            {
                id: 3,
                type: "blue_z",
                weekday: 18000,
                weekend: 20000
            },
            {
                id: 4,
                type: "orange_z",
                weekday: 16000,
                weekend: 18000
            },
            {
                id: 5,
                type: "red_z",
                weekday: 15000,
                weekend: 17000
            },
            {
                id: 6,
                type: "navy_z",
                weekday: 12000,
                weekend: 14000
            },
            {
                id: 7,
                type: "green_z",
                weekday: 8000,
                weekend: 9000
            }
        ];

apperd(ticket);

function apperd(tucket) {
    var table = document.querySelector('#ticketPrice');

    for (var i = 0; i<tucket.length; i++) {
        var imgr = `<tr>
        <td>${tucket[i].id}</td>
        <td>${tucket[i].type}</td>
        <td>${tucket[i].weekday}</td>
        <td>${tucket[i].weekend}</td>
    </tr>`;
    
    table.innerHTML += imgr;
    }
}