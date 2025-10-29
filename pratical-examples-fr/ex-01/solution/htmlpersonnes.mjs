export function htmlPersonnes(personnes) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Données de personnes</title>
</head>
<body>
<h1>Données de personnes</h1>
<table>
<thead>
<tr><th>Identifiant</th><th>Poids</th><th>Taille</th></tr>
</thead>
<tbody>
${personnes.map(p => `
<tr><td>${p.id}</td><td>${p.poids}</td><td>${p.taille}</td></tr>
`).join('')}
</tbody>
</table>
</body>
</html>`;
}