using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class bunny : animal
{
    // Start is called before the first frame update
    void Start()
    {
        health = 10;
        food = 5;
        hide = 1;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space)){
            takeDamage(5);
        }
    }
}
