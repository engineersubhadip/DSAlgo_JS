// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// TC : O(N)  and SC : (1)

let arr = "abcbadca";

let left = 0;
let right = 0;
let hm = {};
let maxLen = 0;

while (right < arr.length)
{
    if (hm[arr[right]] === undefined)
    {
        hm[arr[right]] = 1;
    }
    else
    {
        hm[arr[right]] += 1;
    }

    while (left <= right && hm[arr[right]] > 1)
    {
        hm[arr[left]] -= 1;
        if (hm[arr[left]] === 0)
        {
            delete hm[arr[left]];
        }
        left += 1;
    }

    if (left <= right)
    {
        let runLen = right - left + 1;
        maxLen = Math.max(maxLen,runLen);
    }

    right += 1;
}

console.log(maxLen);