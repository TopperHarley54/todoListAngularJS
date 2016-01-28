#README

##API

###Url du Serveur
http://37.247.52.168:4400

###1ère étape - obtenir un token avec un petit appel AjaX sur

* POST /clients
* params : {k: "XohNg6Aez]"}

Avec ça on obtient un token en retour à utiliser dans l'appli Angular à passer dans les headers :

_Authorization: Token token=[votre token]_

###Routes

**GET** /lists
**POST** /lists -> {list: {label: "..."}}
**GET** /lists/:id
**PUT** /lists/:id -> {list: {label: "..."}}
**DELETE** /lists/:id

**GET** /lists/:list_id/todos
**POST** /lists/:list_id/todos -> {todo: {text: "..."}}
**GET** /lists/:list_id/todos/:id
**PUT** /lists/:list_id/todos/:id -> {todo: {text: "..."}}
**DELETE** /lists/:list_id/todos/:id
**PUT** /lists/:list_id/todos/:id/done
**PUT** /lists/:list_id/todos/:id/undone
