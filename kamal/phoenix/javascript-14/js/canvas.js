function Canvas(canvasid, numofchild,  mainid){
	this.canvasId = canvasid;
	this.childIdArray = [];
	this.mainId = mainid;
	this.numofChild = numofchild;

	this.init = function(){
		this.canvasElement = document.createElement("div");
		this.canvasElement.className = "canvasElement";

		for(var i = 0; i < this.numofChild; i++){
			// this.childIdArray.push(canvasid + i);
			// this is for naming a new array 
			this.childIdArray.push(this.canvasId + i);
			var childElement = document.createElement("div");
			childElement.className = "childElement";
			// this is for setting different id for array
			childElement.setAttribute("id", this.canvasId + i);
			//this is for making one div child of its parent div
			this.canvasElement.appendChild(childElement);
		}

		var mainElement = document.getElementById(this.mainId);
		mainElement.appendChild(this.canvasElement);
	}

	// this.startAnimation = function(){
	// 	// for(var i = 0; i < this.childIdArray.length; i++){
	// 	// 	var projetile = new Projectile(100, i * 15,this.childIdArray[i]);
	// 	// 	projetile.findPath();

	// 	// }
	// 	for(var i = 0; i < this.childIdArray.length;i++){
	// 		var projectile1 = new Projectile(100, i * 10,this.childIdArray[i]);
	// 		projectile1.findPath();
	// 	}
	// }

}