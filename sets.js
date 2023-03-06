/*Sets*/

//Semilar to an array, but with no duplicates
//not in a particular order

function mySet() {
  const collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.value = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.value();
    const secondSet = otherSet.value();

    firstSet.forEach(function (el) {
      unionSet.add(el);
    });

    secondSet.forEach(function (el) {
      unionSet.add(el);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    const intersects = new mySet();
    const firstSet = this.value();

    otherSet.forEach(function (el) {
      if (firstSet.has(el)) {
        intersects.add(el);
      }
    });
    return intersects;
  };

  this.difference = function (otherSet) {
    const diff = new mySet();
    const firstSet = this.value();

    otherSet.forEach(function (el) {
      if (!firstSet.has(el)) {
        diff.add(el);
      }
    });
    return diff;
  };

  
}
