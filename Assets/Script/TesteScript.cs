using UnityEngine;
using System.Runtime.InteropServices;

public class TesteScript : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern void save();

    [DllImport("__Internal")]
    private static extern void get();

    void Start() {
        save();
        get();
    }
}