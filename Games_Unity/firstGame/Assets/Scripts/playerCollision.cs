using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerCollision : MonoBehaviour
{
    public PlayerMovement movement;
    private void OnCollisionEnter(Collision collision)
    {
        //Debug.Log(collision.collider.name);
        if(collision.collider.tag == "Obstacle")
        {

        }
    }
}
