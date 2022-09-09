class StaffList {
  constructor() {
    this.members = [];
  }

  add(name, age) {
    if (age > 20 && !this.members.includes(name)) {
      this.members.push(name);
      return this.members;
    } else {
      throw new Error("Staff member age must be greater than 20");
    }
  }

  remove(name) {
    if (this.members.includes(name)) {
      this.members.splice(this.members.indexOf(name), 1);
      return true;
    } else {
      return false;
    }
  }

  getSize() {
    return this.members.length;
  }
}
