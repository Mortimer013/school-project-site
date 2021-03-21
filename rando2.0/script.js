



function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/FGCLONE/48c9b251-a792-4cc2-87f0-37ae5de466b2/?amount=1')
	.then(res => res.json())
	.then(res => {
		document.getElementById('count').innerHTML = res.value;
	})
}
updateVisitCount();