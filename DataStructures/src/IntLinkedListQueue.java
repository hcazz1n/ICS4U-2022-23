public class IntLinkedListQueue {
    private IntLinkedList data;

    /*This is a linked list implementation of a queue where the front of the linked list is the front of the queue */
    public IntLinkedListQueue(){
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el){
        return data.add(el);
    }

    public Integer dequeue(){
        return data.removeFront();
    }

    public Integer peek(){
        return data.get(0);
    }

    public void clear(){
        data = new IntLinkedList();
    }

    public Integer get(int index){
        return data.get(index);
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }
}
