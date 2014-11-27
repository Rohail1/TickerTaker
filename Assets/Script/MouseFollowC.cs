using UnityEngine;
using System.Collections;

public class MouseFollowC : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}

	float smooth = 2.0f;
	float tiltAngle = 30.0f;
	float haftw = Screen.width/2;
	float hafth = Screen.height/3;
	// Update is called once per frame
	void Update () {

		transform.position = new Vector3((Input.mousePosition.x - haftw)/haftw,transform.position.y,(Input.mousePosition.y - hafth)/hafth);
//		Debug.Log (transform.position.x);
		float tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * 2;
		float tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2;
		Quaternion Target = Quaternion.Euler(tiltAroundX,0,tiltAroundZ);
		transform.rotation = Quaternion.Slerp(transform.rotation,Target,Time.deltaTime * smooth);
	}
}
