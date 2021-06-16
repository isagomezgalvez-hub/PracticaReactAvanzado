function compose(...fns){
	return function(argumento){
		return fns.reduceRight((acumulado, fn)=> fn(acumulado), argumento)
	}
}

export default compose;