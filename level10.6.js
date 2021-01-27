const arr = [8,16,42];

let check = arr.every(function(elem)
{
    if (elem === arr[0])
    {
        return true;
    }
    else {
        return false;
    }
});

console.log(check);