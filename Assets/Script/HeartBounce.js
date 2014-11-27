#pragma strict

var velocityWasStored : boolean = true;
var storedVelocity : Vector3;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col : Collision)
{

//		if(col.gameObject.tag == "tray")
//		{
//			Debug.Log("Yooo");
			if(velocityWasStored)
			{
				storedVelocity = rigidbody.velocity;
//				velocityWasStored = true;
			}
			rigidbody.velocity.y = 3;
//		}

}