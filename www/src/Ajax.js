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

function ajaxError(res){
	alert(res.statusText)
	if(res.status === 403 || res.status === 401){
		//TODO not refresh use react-route
		location.href = "/#login"
	}
}

function login(phone, pass){
	let promise = new Promise(function(reject){
		ajaxGet({
	        url: 'option/regist?phone=' + phone + '&code=' + pass,
	    }).then(res => {
	    	if(res.code === "OK"){
	    		sessionStorage.clear();
	    		reject(res.data);
	    	}else{
	    		alert(res.msg)
	    	}
	    }).catch(res => ajaxError(res));
	})
    return promise
}

function regist(phone){
	let promise = new Promise(function(reject){
		ajaxGet({
	        url: 'option/get_code?phone=' + phone,
	    }).then(res => {
	    	if(res.code === "OK"){
	    		reject(res.data);
	    	}else{
	    		alert(res.msg)
	    		reject(res.data);
	    	}
	    }).catch(res => ajaxError(res));
	})
    return promise
}

function getList(name, query){
	let promise = new Promise(function(reject){
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
		    		alert(res.msg)
		    	}
		    }).catch(res => ajaxError(res));
		}
	})
    return promise
}

function updateItem(name, data){
	let promise = new Promise(function(reject){
		ajaxPost({
	        url: name + '/save',
	        data: data
	    }).then(res => {
	    	if(res.code === "OK"){
	    		sessionStorage.clear();
	    		reject(res.data);
	    	}else{
	    		alert(res.msg)
	    	}
	    }).catch(res => ajaxError(res));
	})
    return promise
}

function removeItem(name, id){
	let promise = new Promise(function(reject){
		ajaxPost({
	        url: name + '/delete/' + id
	    }).then(res => {
	    	if(res.code === "OK"){
	    		sessionStorage.clear();
	    		reject(res.data);
	    	}else{
	    		alert(res.msg)
	    	}
	    }).catch(res => ajaxError(res));
	})
    return promise
}

function search(name){
    let promise = new Promise(function(reject){
        ajaxGet({
            url: 'search/query?name=' + name,
        }).then(res => {
            reject(res)
        }).catch(res => ajaxError(res));
    })
    return promise
}

function saveas(data){
    let promise = new Promise(function(reject){
        ajaxPost({
            url: 'search/saveas',
            data: data
        }).then(res => {
            if(res.code === "OK"){
                sessionStorage.clear();
                reject(res.data);
            }else{
                alert(res.msg)
            }
        }).catch(res => ajaxError(res));
    })
    return promise
}

const Resource = {
  list: getList,
  save: updateItem,
  remove: removeItem,
  login: login,
  regist: regist,
  search: search,
  saveas: saveas
};

export default Resource;