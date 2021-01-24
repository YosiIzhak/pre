for (let i = 0; i <= 100; i++)
{
    if ((i%7 == 0) || (i%10 == 7) || (Math.floor(i/10) ==7))
    {
        console.log('BOOM!')
    }
    else 
    {
      console.log(i)
    }
}



   