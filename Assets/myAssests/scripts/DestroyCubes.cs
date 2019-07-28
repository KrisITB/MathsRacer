using UnityEngine;
using System.Collections;

public class DestroyCubes : MonoBehaviour {

	void OnCollisionEnter(Collision col)
	{
		if(col.gameObject.tag == "10")
		{
			Destroy(col.gameObject);
		}
	}	

}
