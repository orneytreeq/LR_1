let n = prompt('n: ', '10');
const f = x => ((x.toString().includes('.')) ? 1 : 0)

if ((isNaN(parseFloat(n)) || !isFinite(n)) || (f(n)>0) || (n <= 2) || (n>=15))
{
    alert('Недопустимое n: ' + n);
}
else
{
    n = Number(n);    
    let t = 0;

    for(let i = 1; i< n+1; i++)
    {
        let out = 100/i; 
        document.write('<hr width=' + out + '%>');
    }

    document.write('<table align="center" border = "1" style="border-width: 1px;border-collapse: collapse;" cellspacing="0">');


    for(let i = 0; i<8;i++)
    {
        document.write('<tr>');

        for(let j = 0; j< 8; j++)
        {
            if(((i%2==0)&&((j==0)||(j==1)||(j==4)||(j==5)))||(!(i%2==0)&&((j==2)||(j==3)||(j==6)||(j==7))))
            {
                document.write('<td bgcolor="gray"> </td>');
            }
            else
            {
                document.write('<td bgcolor="white" style="border: 1px solid black; padding: 2px"> </td>');
            }
        }

        document.write('</tr>');
    }

    document.write('</table>');

    for(let i = n; i> 0; i--)
    {
        let out = 100/i; 

        document.write('<hr width=' + out + '%>');
    }
}