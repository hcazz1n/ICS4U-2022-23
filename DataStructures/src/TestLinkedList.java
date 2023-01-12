public class TestLinkedList {
    public static void main(String[] args) {
        IntArrayStack test = new IntArrayStack();
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
