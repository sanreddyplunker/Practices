//console.log("Hello World");

function node(val) {
  this.left;
  this.right;
  this.val = val;
}
let root = null;

function insert(key) {
  root = BST(root, key);
}

function BST(root, val) {
  if (root == null) {
    root = new node(val);
    return root;
  } else if (root.val > val) {
    root.left = BST(root.left, val);
  } else if (root.val < val) {
    root.right = BST(root.right, val);
  }
  return root;
}

function search(root, val) {
  if (root.val == val) {
    return root.val;
  } else if (root.val < val) {
    return search(root.right, val);
  } else if (root.val > val) {
    return search(root.left, val);
  }
}

function deleteBST(root, val) {
  if (root.val == val) {
    root = root.left;
    return root;
  } else if (root.val < val) {
    root = deleteBST(root.right, val);
  } else if (root.val > val) {
    root = deleteBST(root.left, val);
  }
}

insert(3);
insert(2);
insert(1);
insert(4);
console.log(root);
console.log(deleteBST(root, 2));
