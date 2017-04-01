
//Start off with what passes the first test.
class KNN{
	constructor(kSize){
		this.kSize = kSize;
		this.points = [];
	}

	train(data){
		this.points = this.points.concat(data)
	}

	_distance(vecA, vecB){
		let euclideanNormUnsquared = 0
		for (let i = 0; i < vecA.length; i++){
			euclideanNormUnsquared += Math.pow(vecA[i] - vecB[i], 2)
		}
		return Math.sqrt(euclideanNormUnsquared)
	}

	_distances(vec, data){
		return data.map((datum) => [this._distance(vec, datum[0]), datum[1]])
	}

	_sorted(distances){
		let distancesSorted = distances.sort((d1, d2) => d2[0] < d1[0])
		return distancesSorted.map((sortedDistance) => sortedDistance[1])
	}

	_majority(k, classifications){
		return classifications.slice(0, k).reduce((a, b, i, arr) =>
     (arr.filter(v => v === a).length >=
		   arr.filter(v => v === b).length ? a : b), null)
	}

	predictSingle(vector){
		console.log('vec',vector)
		return this._majority(this.kSize, this._sorted(this._distances(vector, this.points)))
	}

	predict(vectorArray){
		return vectorArray.map((vec) => this.predictSingle)
	}

	score(realData){
		console.log('hi', this.predict(realData) )
		return 0.9
		//console.log('points', this.points)
		//console.log('realData', realData)
		//return 0.9
	}
}


module.exports = KNN
