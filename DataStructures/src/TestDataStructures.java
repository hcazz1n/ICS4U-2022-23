public class TestDataStructures {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if(!testAddNodes()){
            System.out.println("Test failed: testAddNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testRemoveNodes()){
            System.out.println("Test failed: testRemoveNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testGetNodes()){
            System.out.println("Test failed: testGetNodes");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testIntLinkedListStack()){
            System.out.println("Test failed: testIntLinkedListStack");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testIntArrayStack()){
            System.out.println("Test failed: testIntArrayStack");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testIntArrayQueue()){
            System.out.println("Test failed: testIntArrayQueue");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testIntLinkedListQueue()){
            System.out.println("Test failed: testIntLinkedListQueue");
            testFailed++;
        } else {
            testPassed++;
        }

        if(!testIntBST()){
            System.out.println("Test failed: testIntBST");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Tests Passed: " + testPassed + " <---> " + "Tests Failed: " + testFailed);
    }

    private static IntLinkedList prepareLinkedList(){ //used in other test methods
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        return list;
    }   

    private static IntBST prepareBST() {
        IntBST bst = new IntBST();
        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        return bst;
    }

    public static boolean testIntBST() {
        IntBST bst = prepareBST();
        if(!(bst.find(1).getValue()==1))
            return false;
        if(!(bst.find(11).getValue()==11))
            return false;
        if(!(bst.find(15)==null))
            return false;

        if(!(bst.find(6).getLeftChild().getValue()==3))
            return false;
        if(!(bst.find(6).getRightChild().getValue()==8))
            return false;
        if(!(bst.find(3).getLeftChild().getValue()==1))
            return false;
        if(!(bst.find(8).getRightChild().getValue()==13))
            return false;

        
        String inOrder = "1367891113";
        if(!(bst.inOrderPrintTraversal().equals(inOrder)))
            return false;
        String preOrder = "6318713911";
        if(!(bst.preOrderPrintTraversal().equals(preOrder)))
            return false;
        String postOrder = "1371191386";
        if(!(bst.postOrderPrintTraversal().equals(postOrder)))
            return false;

        return true;
    }
}

    private static boolean testIntArrayQueue(){ //tested
        IntArrayQueue arr = new IntArrayQueue();
        
        Integer temp = arr.enqueue(1);
        if(temp != 1)
            return false;

        temp = arr.enqueue(2);
        if(temp != 2)
            return false;

        temp = arr.enqueue(3);
        if(temp != 3)
            return false;
        
        if(arr.peek() != 1)
            return false;

        if(arr.dequeue() != 1)
            return false;

        if(arr.peek() != 2)
            return false;

        if(arr.isEmpty() != false)
            return false;    

        arr.clear();

        if(arr.isEmpty() != true)
            return false;

        return true;
    
    }
    
    private static boolean testGetNodes(){ //tested
        IntLinkedList list = prepareLinkedList();
        Integer i = list.get(0);
        if(i != 1){
            return false;
        }

        i = list.get(list.size() - 1);
        if(i != 5){
            return false;
        }

        i = list.get(2);
        if(i != 3){
            return false;
        }

        try{
            i = list.get(-1);
            return false;
        } catch(IndexOutOfBoundsException ex) {

        }

        try{
            i = list.get(20);
            return false;
        } catch(IndexOutOfBoundsException ex) {
            
        }

        return true;
    }

    private static boolean testIntArrayStack(){ //tested
        IntArrayStack arr = new IntArrayStack();
        if(arr.empty() != true)
            return false;

        if(arr.pop() != null){
            return false;
        }

        Integer temp = arr.push(1);
        if(temp != 1)
            return false;

        temp = arr.push(2);
        if(temp != 2)
            return false;

        temp = arr.push(3);
        if(temp != 3)
            return false;

        if(arr.search(1) != 3)
            return false;

        if(arr.search(2468) != -1)
            return false;

        if(arr.pop() != 3)
            return false;

        if(arr.empty() != false)
            return false;

        if(arr.peek() != 2)
            return false;
        
        return true;
    }


    private static boolean testIntLinkedListStack() {
        IntListStack stack = new IntListStack();
        if(stack.empty() != true)
            return false;

        if(stack.peek() != null)
            return false;

        stack.push(1);
        if(stack.peek() != 1)
            return false;

        stack.push(2);
        if(stack.peek() != 2)
            return false;

        stack.push(3);
        if(stack.peek() != 3)
            return false;

        Integer temp = stack.pop();
        if(temp != 3)
            return false;
        
        if(stack.peek() != 2)
            return false;

        if(stack.empty() != false)
            return false;

        if(stack.search(3) != -1)
            return false;

        if(stack.search(2) != 0)
            return false;

        return true;
    }

    private static boolean testIntLinkedListQueue() {
        IntLinkedListQueue queue = new IntLinkedListQueue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        queue.dequeue();
        if(queue.get(0) != 2)
            return false;

        queue.dequeue();

        if(queue.get(0) != 3)
            return false;

        if(queue.peek() != 3)
            return false;

        queue.clear();
        if(!queue.isEmpty())
            return false;

        return true;
    }

    private static boolean testRemoveNodes() { //tested
        IntLinkedList list = new IntLinkedList();
        Integer temp = list.remove(6);
        if(temp != null)
            return false;

        list.remove(50); 
        
        list = prepareLinkedList();
        if(list.size() != 5 || list.get(0) != 1 || list.get(list.size() - 1) != 5)
            return false;
        
        temp = list.remove(3);
        if(temp != 3 || list.size() != 4)
            return false;

        temp = list.remove(1);
        if(temp != 1 || list.size() != 3)
            return false;

        temp = list.remove(5);
        if(temp != 5 || list.size() != 2)
            return false;

        temp = list.remove(60);
        if(temp != null || list.size() != 2)
            return false;

        list = prepareLinkedList();

        temp = list.removeFront();
        if(temp != 1 || list.size() != 4)
            return false;

        return true;
    }

    private static boolean testAddNodes() { //tested
        IntLinkedList list = prepareLinkedList();
  
        list.add(6);
        if (list.get(5) != 6 || list.size() != 6)
           return false;
  
        list.addFront(4);
        list.addFront(5);
        if (list.get(0) != 5 || list.get(1) != 4 || list.size() != 8)
           return false;
  
        list.add(1, 6);
        if (list.get(0) != 5 || list.get(1) != 6 || list.size() != 9)
           return false;
  
        list.add(0, 7);
        if (list.get(0) != 7 || list.size() != 10)
           return false;
  
        list.add(list.size(), 8);
        if (list.get(list.size() - 1) != 8 || list.size() != 11)
           return false;
  
        return true;
    }


}
