const chainMaker = {
  list: [],
  getLength() {
    return this.list.length;
  },
  addLink(value) {
    if (value === null) {
    value = 'null';
  }
  
    this.list.push(`( ${value.toString()} )`);
  
    return this;
  },
  removeLink(position) {
  position = position - 1;
  
  if (this.list[position] === undefined) {
    this.list = [];
    throw new Error('Illegal position!');
  }
  
  this.list.splice(position, 1);
  
    return this;
  },

  reverseChain() {
  this.list = this.list.reverse();
  
  return this;
  },

  finishChain() {
    let result = this.list.join('~~');
    this.list = [];
    
    return result;
  }
};

module.exports = chainMaker;
