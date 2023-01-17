public class IntBST {
    private IntBSTNode root;

    public IntBST(){
        this.root = null;
    }

    public IntBSTNode add(Integer val){
        return addRecursive(root, val);
    }

    /**
     * 
     * @param root root of the subtree we are adding val to
     * @param val the Integer we are adding to the BST (NO DUPLICATE VALUES)
     * @return reference to the IntBSTNode we inserted
     */
    public IntBSTNode addRecursive(IntBSTNode root, Integer val) {
        if(val < root.getValue()){
            if(root.hasLeftChild()){
                return addRecursive(root.getLeftChild(), val);
            } else {
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftChild(child);
                return child;
            }
        } else if(val > root.getValue()){
            if(root.hasRightChild()){
                return addRecursive(root.getRightChild(), val);
            } else {
                IntBSTNode child = new IntBSTNode(val);
                root.setRightChild(child);
                return child;
            }
        } else {
            return root;
        }
    }
}

