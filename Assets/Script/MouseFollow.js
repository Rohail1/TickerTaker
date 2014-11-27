#pragma strict

function Start () {

}

		var smooth = 5.0;
		var tiltAngle = 30.0;

function Update () {
		var haftw : float = Screen.width/2;
		var hafth : float = Screen.height/3;
		transform.position.x = (Input.mousePosition.x - haftw)/haftw;
//		Debug.Log(transform.position.x);
		//transform.position.y= transform.position.y;
		transform.position.z=(Input.mousePosition.y - hafth)/hafth;
		var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * 2;
		var tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2;
		var Target = Quaternion.Euler(tiltAroundX,0,tiltAroundZ);
		transform.rotation = Quaternion.Slerp(transform.rotation,Target,Time.deltaTime * smooth);
}