const nameColumnEl = document.querySelector('.name-col');
const roleColumnEl = document.querySelector('.role-col');
const imgColumnEl = document.querySelector('.img-col');

const users = [
	{
		nome: 'Wayne Barnett',
		ruolo: 'Founder & CEO',
		foto: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		nome: 'Angela Caroll',
		ruolo: 'Chief Editor',
		foto: 'angela-caroll-chief-editor.jpg',
	},
	{
		nome: 'Walter Gordon',
		ruolo: 'Office Manager',
		foto: 'walter-gordon-office-manager.jpg',
	},
	{
		nome: 'Angela Lopez',
		ruolo: 'Social Media Manager',
		foto: 'angela-lopez-social-media-manager.jpg',
	},
	{
		nome: 'Scott Estrada',
		ruolo: 'Developer',
		foto: 'scott-estrada-developer.jpg',
	},
	{
		nome: 'Barbara Ramos',
		ruolo: 'Graphic Designer',
		foto: 'barbara-ramos-graphic-designer.jpg',
	},
];

for (let i = 0; i < users.length; i++) {
	const img = document.createElement('img');
	img.src = `img/${users[i].foto}`;

	appendData(nameColumnEl, users[i].nome);
	appendData(roleColumnEl, users[i].ruolo);
	appendData(imgColumnEl, img);
}

function appendData(container, data) {
	container.append(data);
	container.innerHTML += '<br>';
}
