// 590. N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    // Base case: If the root is null, return an empty array
    if (!root) return [];
    
    let result = [];
    
    // Helper function to perform postorder traversal
    function dfs(node) {
        // If the node has children, traverse them recursively
        if (node.children) {
            node.children.forEach(child => {
                dfs(child);
            });
        }
        
        // After traversing all children, add the value of the current node to the result array
        result.push(node.val);
    }
    
    // Start the traversal from the root node
    dfs(root);
    
    return result;
};

// OR

var postorder = function (root) {
    let result = []

    function helper(root, result) {
        if (root !== null) {
            for (let child of root.children) {
                helper(child, result)
            }
            result.push(root.val)
        }
    }

    helper(root, result)
    return result
};

