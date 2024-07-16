"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data",inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });
    main();
});

function readLine()
{
    return inputString[currentLine++];
};

function printList(obj)
{
    let s = "";
    while (obj !== null)
    {
        s += obj.data;
        s += " ";
        obj = obj.next;
    }
    console.log(s);
}

function main()
{
    let t = parseInt(readLine());
    for (let i=0; i<t; i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j=1; j<n; j++)
        {
            tail.next = new Node(arr[j]);
            tail.next.prev = tail;
            tail = tail.next;
        }
        let obj = new Solution(); // Solution() custom class Name;
        let res = obj.removeDuplicates(head); // .removeDuplicates : custom function name
        printList(res);
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    /**
     * Function to remove duplicates from unsorted linked list.
     * @param {Node} head
     * @returns {Node}
     */
    removeDuplicates(head) {
         // code here
         // return head after editing list
         

    }
}