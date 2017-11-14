function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
  
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getUser(){
	var uid = getCookie("uid")
    var token = getCookie("tooken")
    if(uid !== null && token !== null){
    	var str = localStorage.getItem(uid)
    	if(str === null){
    		return null;
    	}else{
    		return JSON.parse(str)
    	}
    }
	return null
}

function setUser(user){
	var key = user.phone
	var value = JSON.stringify(user)
	localStorage.setItem(key, value)
}

function clearUser(){
	deleteCookie("uid")
    deleteCookie("tooken")
	localStorage.clear();
}

const Cache = {
  setUser: setUser,
  getUser: getUser,
  clearUser: clearUser
};

export default Cache;