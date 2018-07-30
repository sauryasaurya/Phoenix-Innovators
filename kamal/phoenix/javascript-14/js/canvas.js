function Canvas(canvasid, numofchild,mainid){
	this.canvasId = canvasid;
	this.childIdArray = [];
	this.mainId = mainid;
	this.numofChild = numofchild;

	this.init = function(){
		this.canvasElement = document.createElement("div");
		this.canvasElement.className = "canvasElement";

		for(var i = 0; i < this.numofChild; i++){
			this.childIdArray.push(canvasid + i);
			var childElement = document.createElement("div");
			childElement.className = "childElement";
			this.childIdArray.push(this.canvasId + i);
			childElement.setAttribute("id", this.canvasId + i);
			this.canvasElement.appendChild(childElement);
		}

		var mainElement = document.getElementById(this.mainId);
		mainElement.appendChild(this.canvasElement);
	}

	this.startAnimation = function(){
		// for(var i = 0; i < this.childIdArray.length; i++){
		// 	var projetile = new Projectile(100, i * 15,this.childIdArray[i]);
		// 	projetile.findPath();

		// }
		var projetile1 = new Projectile(100, 15,this.childIdArray[0]);
			projetile1.findPath();
			var projetile2 = new Projectile(100, 30,this.childIdArray[1]);
			projetile2.findPath();
	}

}