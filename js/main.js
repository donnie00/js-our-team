const cardContainerEl = document.getElementById('cardContainer');

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
	const card = createCard(users[i]);
	cardContainerEl.append(card);
}

/**
 * creates a card with a h3, p, and img
 * @param {Object} user the object where we get the data
 */

function createCard(user) {
	const col = document.createElement('div');
	col.classList.add('col');

	const card = document.createElement('div');
	card.classList.add('my-card');

	const name = document.createElement('h3');
	name.innerText = user.nome;

	const role = document.createElement('p');
	role.classList.add('text-muted');
	role.innerText = user.ruolo;

	const img = document.createElement('img');
	img.classList.add('img-fluid', 'rounded-5');
	img.src = `img/${user.foto}`;

	card.append(img, name, role);
	col.append(card);

	return col;
}
