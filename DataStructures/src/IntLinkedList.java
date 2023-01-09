public class IntLinkedList {
    private IntNode head;
    private int manyItems;

    public IntLinkedList(){
        this.head = null;
        this.manyItems = 0;
    }

    public boolean add(Integer data){
        IntNode temp = new IntNode(data);

        if(head == null){
            head = temp;
        } else {
            IntNode curr = head;
            while(curr.getLink() != null){
                curr = curr.getLink();
            }
            curr.setLink(temp);
        }
        return true;
    }

    public boolean addFront(Integer data){
        head = new IntNode(data, head);
        manyItems++;
        return true;
    }

    public boolean add(int index, Integer data){
        if(index > manyItems){
            throw new IndexOutOfBoundsException("Index " + index + " is not allowed. Max index is " + manyItems);
        } else {
            if(index == 0){
                addFront(50);
            } else {
                IntNode curr = head;
                for(int i=0; i<index-1; i++){
                    curr = curr.getLink();
                }
                
                curr.setLink(new IntNode(data, curr.getLink()));
            }
        }
        return true;
    }

    public Integer remove(Integer data){
        if(head != null && head.getData() == data){
            head = head.getLink();
            return data;
        } else {
            IntNode curr = head;
            while(curr.getLink() != null && curr.getLink().getData() != data){
                curr = curr.getLink();
            }
            if(curr.getLink() != null){
                curr.setLink(curr.getLink().getLink());
                return data;
            }
        }

        return null;
    }

    public int size(){
        return manyItems;
    }

    public boolean isEmpty(){
        return head == null;
    }
}
