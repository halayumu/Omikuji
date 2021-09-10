//-
function Message() {
    let box = ['大吉', '中吉', '小吉'];
    let no = Math.floor(Math.random() * 3) + 1;
    let newNo = Number(no);
    alert(box[newNo]);

}