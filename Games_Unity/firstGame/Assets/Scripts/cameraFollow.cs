using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cameraFollow : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    public Transform player;
    public Vector3 offSet;
    // Update is called once per frame
    void Update()
    {
        //Debug.Log(player.position);
        transform.position = player.position + offSet;
    }
}
