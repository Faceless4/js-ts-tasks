module.exports.groupUsers = function (users: Array<{ type: 'employee' | 'contractor' }>): Record<'employees' | 'contractors', Array<{ type: 'employee' | 'contractor' }>> {
  const result: Record<'employees' | 'contractors', Array<{ type: 'employee' | 'contractor' }>> = { employees: [], contractors: [] };
  
  users.forEach(user => {
    if (user.type === 'employee') {
      result.employees.push(user);
    } else if (user.type === 'contractor') {
      result.contractors.push(user);
    }
  });
  
  return result;
};
