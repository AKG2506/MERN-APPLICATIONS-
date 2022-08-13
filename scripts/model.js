// hra , da, ta , gs functions
function hra(basicSalary){
  return basicSalary * 0.50;
}
function da(basicSalary){
  return basicSalary * 0.20;
}
function ta(BasicSalary)
     {
      return BasicSalary * 0.3;
    }
function ma(BasicSalary)
     {
      return BasicSalary * 0.6;
    }
function gs(BasicSalary) 
    {
      return (
        BasicSalary +
        hra(BasicSalary) +
        da(BasicSalary) +
        ta(BasicSalary) +
        ma(BasicSalary)
      );
    }
function tax(BasicSalary) 
    {
      return gs(BasicSalary) * 30 / 100;
    }
function ns(BasicSalary)
     {
      return gs(BasicSalary) - tax(BasicSalary);
    }
