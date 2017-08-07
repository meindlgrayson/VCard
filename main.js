const basics = document.querySelector('.basics-list');

const itemMaker = function(key, value, a) {
  let newBasic = document.createElement('li');
  let newKey = document.createElement('span');
  newKey.textContent = key;
  newBasic.appendChild(newKey);
  let newValue = document.createElement('p');

  if(a){
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', a);
    newAnchor.textContent = value;
    newValue.appendChild(newAnchor);
  } else {
  newValue.textContent = value;
  }
  newBasic.appendChild(newValue);
  basics.appendChild(newBasic);
}

let requestListener = function() {
  let data = JSON.parse(this.responseText);
  console.log(data);

  // ADDS NAME TO CARD HEADER
  let name = document.querySelector('.name');
  name.textContent = data.name;

  // POPULATES "THE BASICS" SECTION

  itemMaker('Name', data.name);
  itemMaker('Github URL', data.login, data.html_url);
  itemMaker('Email', /*data.email*/ 'filler@fil.com');
  itemMaker('Company', /*data.company*/ 'Phils Fillers');
  itemMaker('Website', "filler.com");

  // POPULATES "STORY" SECTION

  let story = document.querySelector('.story');
  let bio = document.createElement('p');
  bio.textContent = data.bio;
  story.appendChild(bio);

  // ADDS AVATAR

  let avatar = document.querySelector('.avatar-photo');
  let image = document.createElement('img');
  image.setAttribute('src', data.avatar_url);
  avatar.appendChild(image);

}

let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/meindlgrayson');
request.addEventListener('load', requestListener);
request.send();