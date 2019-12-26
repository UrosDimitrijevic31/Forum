const BASEURL = 'https://coetus.herokuapp.com'
const API = '/api/forum'
const USERS = '/users'
const TOPICS = '/topics'
const ALLMESSAGES = '/message';
const ADDMESSAGE = '/message/'

//************************************************LOGIN******************************************/
function login(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res;
}
//************************************************REGISTRTION************************************/
function register(user) {
    return fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(res => res.json())
}

//**************************************************** DOHVATI SVE TEME****************************************/
function getTopics() {
    return fetch(`${BASEURL}${API}${TOPICS}`)
        .then(res => res.json())
}

//****************************************************PORUKE ZA ODREDJENU TEMU************************************ */
function getMsgForTopic(id) {
    return fetch(`${BASEURL}${API}${ALLMESSAGES}/${id}`)
        .then(res => res.json())
}

//***************************************************DODAVANJE NOVE TEME********************************* */

function newTopic(user_id, title) {
    return fetch(`${BASEURL}${API}${TOPICS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify({ title: title, user_id: user_id})
    }).then(res => res.json());
}

/*************************************************INFORMACIJE O USERU NA OSNOVU ID-A*******************************/
function getUserId(id) {
    return fetch(`${BASEURL}${API}${USERS}/${id}`)
        .then(res => res.json())
}

//****************************************************DOHVATANJE SVIH PORUKA ZA SVE TEME*******************************/
function getAllMessages() {
    return fetch(`${BASEURL}${API}${ALLMESSAGES}`)
        .then(res => res.json())
}

//***************************************************DODAVANJE NOVE TEME********************************** */

function addMessage(username, topic_id, message) {
    return fetch(`${BASEURL}${API}${ADDMESSAGE}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            topic_id: topic_id,
            message: message
        })
    }).then(res => res.json());
}


export {
    login, register, getTopics, getMsgForTopic, newTopic, getUserId, getAllMessages, addMessage
}
