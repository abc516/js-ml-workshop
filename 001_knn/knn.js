
//Start off with what passes the first test.
class KNN{
	constructor(kSize){
		this.kSize = kSize;
		this.points = [];
	}

	train(data){
		this.points = data
	}
}


module.exports = KNN
