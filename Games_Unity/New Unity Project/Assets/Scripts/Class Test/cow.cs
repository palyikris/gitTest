using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class cow : animal
{
    // Start is called before the first frame update
    void Start()
    {
        health = 100;
        food = 35;
        hide = 5;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            takeDamage(5);
        }
    }
}
