using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Story : MonoBehaviour
{
    public Text storyText;
    public Button yesButton;
    public Button noButton;
    // Start is called before the first frame update
    void Start()
    {
        storyText.text = "Huszár előtted fekszik meztelenül.\nDo you rape him?";
        yesButton.onClick.AddListener(Q1Yes);
        noButton.onClick.AddListener(Q1No);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void Q1Yes()
    {
        storyText.text = "Gratulálunk, elkaptad az összes STD-t";
    }
    public void Q1No()
    {
        storyText.text ="Balfasz geci";
    }
}
