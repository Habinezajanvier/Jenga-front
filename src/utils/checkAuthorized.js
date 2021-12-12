const checkAuthorized = (allowed, roles) => {
  let authorized = [];
  for (let i = 0; i < allowed.length; i++) {
    if (!roles.includes(allowed[i])) {
      authorized.push('F');
    } else {
      authorized.push('T');
    }
  }
  if (authorized.includes('T')) return true;
  return false;
};

export default checkAuthorized;
