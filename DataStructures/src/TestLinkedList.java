public class TestLinkedList {
    public static void main(String[] args) {
        testIntArrayStack();
    }

    private static void testIntArrayStack(){ 
        IntArrayStack arr = new IntArrayStack();
        System.out.println(arr.empty());
        arr.pop();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        System.out.println(arr);
        System.out.println(arr.search(1));
        System.out.println(arr.search(2468));
        arr.pop();
        System.out.println(arr);
        System.out.println(arr.empty());
        System.out.println(arr.peek()); 
    }


    private static void testIntLinkedListStack() {
        IntListStack stack = new IntListStack();
        System.out.println(stack.empty());
        Integer temp = stack.pop();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        System.out.println(stack);

        temp = stack.pop();
        System.out.println(temp);
        System.out.println(stack);

        stack.peek();

        System.out.println(stack.empty());

        System.out.println(stack.search(3));

    }

    private static void testRemoveNodes() {
        IntLinkedList list = new IntLinkedList();

        Integer temp = list.remove(6);
        System.out.println(list);
        System.out.println(temp);

        list.remove(50); 
        
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);

        temp = list.remove(3);
        System.out.println(temp);

        temp = list.remove(1);
        temp = list.remove(5);
        System.out.println(temp);

        temp = list.remove(60);
        System.out.println(temp);

        list = new IntLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        temp = list.removeFront();
        System.out.println(list);
        System.out.println(temp);

    }

    private static void testAddNodes() {
        IntLinkedList list = new IntLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1, 6);
        System.out.println(list);

        list.add(0, 7);
        System.out.println(list);

        list.add(0, list.size());
        System.out.println(list);
    }
}
