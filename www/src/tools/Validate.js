function validate(props, obj) {
	var result = {}
	result.hasError = false
	for (var i = 0; i < props.length; i ++) {
	    var col = props[i]
		if(col.type === "obj" || col.type === "list") {
			result[col.name] = false
		}else{
			if(col["null"] === false){
			    if(obj[col.name] === undefined || obj[col.name] === null){
			        result[col.name] = true
                    result.hasError = true
			    }else if(obj[col.name] === ""){
					result[col.name] = true
					result.hasError = true
				}
			}
			if(col.type === "num"){
                var reg = new RegExp("^[0-9]*$");
                if(!reg.test(obj[col.name])){
                    result[col.name] = true
                    result.hasError = true
                }
            }
		}
    }
	return result
}

const Validate = {
  validate: validate
};

export default Validate;