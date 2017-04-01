
//Start off with what passes the first test.
class KNN{
	constructor(kSize){
		this.kSize = kSize;
		this.points = [];
	}

	train(data){
		this.points = this.points.concat(data)
	}
}


module.exports = KNN
