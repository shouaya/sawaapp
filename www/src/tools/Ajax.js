const API_PATH = '/api/'
const headers = {'Content-Type': 'application/json'}
function _networkDone(res) {
    if (!res['err_code']) {
        return res
    } else {
        return Promise.reject(res)
    }
}

function _networkFail(...args) {
    return Promise.reject(args[0])
}

function ajaxGet({url}) {
    url = API_PATH + url
    let promise = fetch(url, {
        method: 'GET',
        headers: headers,
        credentials: 'same-origin'
    })
    let success = _networkDone.bind(this)
    let failure = _networkFail.bind(this)
    return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
}

function ajaxPost({url, data}) {
    url = API_PATH + url
    let promise = fetch(url, {
    	body: JSON.stringify(data),
    	method: 'POST',
        headers: headers,
        credentials: 'same-origin'
    })
    let success = _networkDone.bind(this)
    let failure = _networkFail.bind(this)
    return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
}

function login(phone, pass){
	let promise = new Promise(function(reject, error){
		ajaxGet({
	        url: 'option/regist?phone=' + phone + '&code=' + pass,
	    }).then(reject).catch(error);
	})
    return promise
}

function regist(phone){
	let promise = new Promise(function(reject, error){
		ajaxPost({
	        url: 'option/get_code?phone=' + phone,
	    }).then(reject).catch(error);
	})
    return promise
}

function registWithUser(user){
	let promise = new Promise(function(reject, error){
		ajaxPost({
	        url: 'batch/customer/regist',
	        data: user
	    }).then(reject).catch(error);
	})
    return promise
}

function getList(name, query){
	let promise = new Promise(function(reject, error){
		let key = JSON.stringify(query);
		let list = sessionStorage.getItem(key)
		if(list != null){
			reject(JSON.parse(list))
		}else{
			ajaxPost({
		        url: name + '/list',
		        data: query
		    }).then(res => {
		    	if(res.code === "OK"){
		    		sessionStorage.setItem(key, JSON.stringify(res))
		    		reject(res)
		    	}else{
		    	    reject(res)
		    	}
		    }).catch(error);
		}
	})
    return promise
}

function getItem(name, id){
    let promise = new Promise(function(reject, error){
        ajaxGet({
            url: name + '/' + id
        }).then(res => {
            if(res.code === "OK"){
                reject(res)
            }else{
                reject(res)
            }
        }).catch(error);
    })
    return promise
}

function updateItem(name, data){
	let promise = new Promise(function(reject, error){
		ajaxPost({
	        url: name + '/save',
	        data: data
	    }).then(res => {
	    	if(res.code === "OK"){
	    		sessionStorage.clear();
	    		reject(res.data);
	    	}else{
	    	    reject(res.msg)
	    	}
	    }).catch(error);
	})
    return promise
}

function removeItem(name, id){
	let promise = new Promise(function(reject, error){
		ajaxPost({
	        url: name + '/delete/' + id
	    }).then(res => {
	    	if(res.code === "OK"){
	    		sessionStorage.clear();
	    		reject(res.data);
	    	}else{
	    	    reject(res.msg)
	    	}
	    }).catch(error);
	})
    return promise
}

function search(name, type){
    let promise = new Promise(function(reject, error){
        ajaxGet({
            url: 'search/query/' + type + '?name=' + name,
        }).then(res => {
            reject(res)
        }).catch(error);
    })
    return promise
}

function saveas(url, data){
    let promise = new Promise(function(reject, error){
        ajaxPost({
            url: url,
            data: data
        }).then(res => {
            if(res.code === "OK"){
                sessionStorage.clear();
                reject(res.data);
            }else{
                reject(res.msg)
            }
        }).catch(error);
    })
    return promise
}

function select(name, type){
    let promise = new Promise(function(reject, error){
        ajaxGet({
            url: 'search/select?type=' + type + '&name=' + name,
        }).then(res => {
            reject(res)
        }).catch(error);
    })
    return promise
}

const Resource = {
  list: getList,
  item: getItem,
  save: updateItem,
  remove: removeItem,
  login: login,
  regist: regist,
  registWithUser: registWithUser,
  search: search,
  saveas: saveas,
  select: select
};

export default Resource;