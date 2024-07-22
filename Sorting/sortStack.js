let stack = [34,3,31,98,92,23];

let tempStack = [];

while (stack.length > 0)
{
    let currEle = stack.pop();

    if (tempStack.length === 0)
    {
        tempStack.push(currEle);
    }
    else
    {
        
        while (tempStack.length > 0 && tempStack[tempStack.length-1] >= currEle)
        {
            let popEle = tempStack[tempStack.length-1];
            tempStack.pop();
            stack.push(popEle);
        }

        tempStack.push(currEle);
    }
}