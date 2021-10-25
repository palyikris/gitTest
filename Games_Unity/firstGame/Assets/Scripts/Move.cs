using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public Rigidbody rB;
    public float moveVar = 200f;
    void FixedUpdate()
    {
        if (Input.GetKey("w"))
        {
            rB.AddForce(-1000 * Time.deltaTime, 0, 0);
        }
        if (Input.GetKey("s"))
        {
            rB.AddForce(1000 * Time.deltaTime, 0, 0);
        }
        if (Input.GetKey("d"))
        {
            rB.AddForce(0, 0, 1000 * Time.deltaTime);
        }
        if (Input.GetKey("a"))
        {
            rB.AddForce(0, 0, -1000 * Time.deltaTime);
        }
    }
}
