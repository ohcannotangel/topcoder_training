(function(){

  // memo
  var salaries = [];
  var num = 0;

  function totalSalary(relations){

    salaries = [];
    var total = 0;
    relations.forEach(function(elem, i){
      num = 0;
      total += getSalary(i, relations);
      console.log(num);
    });
    
    return total;
  }


  function getSalary(i, relations) {
    
    num++;

    if(!salaries[i]){

      var salary = 0;
      var relation = relations[i];
      
      relation.forEach(function(elem, j){
        if(relation[j] == 'y' && relations[j][i] != 'y' ) {
          salary += getSalary(j, relations);
        }
      });
      
      if(salary == 0) {
        salary = 1;
      }

      salaries[i] = salary;

    }

    return salaries[i];

  }


  function exe(func, data, name) {
    console.time("totalSalary");
    var total = func(data);
    console.log(name + " total: " + total);
    console.timeEnd("totalSalary");
  }

  
  var relations1 = [
    ['n','n','n','n','n','n'],
    ['y','n','y','n','n','y'],
    ['y','n','n','n','n','y'],
    ['n','n','n','n','n','n'],
    ['y','n','y','n','n','n'],
    ['y','n','n','y','n','n']
  ];

  var relations2 = [
    ['n','y','n','n','y','n'],
    ['n','n','n','n','n','n'],
    ['n','n','n','n','n','n'],
    ['n','n','y','n','n','n'],
    ['n','n','n','n','n','n'],
    ['n','n','n','y','y','n']
  ];


  var relations3 = [
    ['n','n','y','n'],
    ['n','n','y','n'],
    ['n','n','n','n'],
    ['n','y','y','n']
  ];


  var relations4 = [
    ['n','n','n','y'],
    ['n','n','n','n'],
    ['n','n','n','n'],
    ['y','n','n','n']
  ];

  var relations5 = [
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['y','n','y','n','n','y','n','n','n','n','n','n','n','n','n'],
    ['y','n','n','n','n','y','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['y','n','y','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['y','y','y','y','y','y','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ['y','y','y','y','y','y','y','y','y','y','y','y','y','n','n'],
    ['y','y','y','y','y','y','y','y','y','y','y','y','y','y','n']
  ];

  var relations6 = [
    ['n','n','n','n'],
    ['n','n','n','n'],
    ['n','n','n','n'],
    ['y','y','y','n']
  ];

  // exe(totalSalary, relations1, "relation1");
  // exe(totalSalary, relations2, "relation2");
  // exe(totalSalary, relations3, "relation3");
  // exe(totalSalary, relations4, "relation4");
  exe(totalSalary, relations5, "relation5");
  // exe(totalSalary, relations6, "relation6");

})();