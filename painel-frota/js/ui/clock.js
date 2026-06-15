export function startClock(){

function update(){

const now = new Date();

document.getElementById(
"clock"
).innerText =

now.toLocaleDateString("pt-BR")
+
" — "
+
now.toLocaleTimeString(
"pt-BR",
{
hour:"2-digit",
minute:"2-digit"
}
);

}

update();

setInterval(update,1000);
}
