using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class animal : MonoBehaviour
{
    public float health = 50;
    public float food = 20;
    public float hide = 2;

    public void takeDamage(float damage)
    {
        health -= damage;
        if(health <= 0)
        {
            Debug.Log($"animal died, u get {food} food and {hide} hide ");
        }
    }

}
