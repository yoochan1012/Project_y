

function baseball(){
    q = prompt("기본 정보를 확인하려면 홀수를, 세부 정보를 확인하려면 짝수를 입력하세요.");

    var item = "잠실 야구장";
    const year = 1982;
    const seat = 25000;
    const leftLine = 100;
    const centerLine = 125;

    if (q != null) {
        if (q >= 0) {
            if (q % 2 === 0) {
                alert ("아래에 있는 주소 링크를 클릭해서 확인하세요.");
            }
            else {
                alert (item + "은 " + year + "년에 개장하였으며, 규격은 " + leftLine + "m-" + centerLine + "m-" + leftLine + "m이며 " + seat + "개의 좌석이 있다.");
            }
        }
    }
    

}