var a = [121,19,161,144,11];
var b = [121,14641,25921,20736,361];

for (i = 0; i < a.length; i++)
 {
    for (j = 0; j < a.length; j++) 
    {
        if (a[i]<a[j]) 
        {
            temp = a[i];
           a[i] = a[j];
            a[j] = temp;
        }
    }
}
//console.log(a)
for (i = 0; i < b.length; i++)
 {
    for (j = 0; j < b.length; j++) 
    {
        if (b[i]<b[j]) 
        {
            temp = b[i];
           b[i] = b[j];
            b[j] = temp;
        }
    }
}
//console.log(b)
var temparr=[]
for (i = 0; i < a.length; i++)
 {
    for (j = 0; j < b.length; j++) 
    {
        if ((a[i]*a[i])===b[j]) 
        {
            temparr.push(a[i])
        }
    }
}
console.log(temparr);
if(temparr.length==a.length)
{
    console.log('same');
}
else
{
    console.log('not');
}
