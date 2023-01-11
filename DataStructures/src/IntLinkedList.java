public class IntLinkedList {
    private IntNode head;
    private int manyItems;

    public IntLinkedList(){
        this.head = null;
        this.manyItems = 0;
    }

    public boolean add(Integer data){
        IntNode temp = new IntNode(data);
        manyItems++;
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

    public Integer removeFront(){
        Integer temp = head.getData();
        if(head == null){
            return null;
        } else {
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public boolean add(int index, Integer data){
        if(index > manyItems){
            throw new IndexOutOfBoundsException("Index " + index + " is not allowed. Max index is " + manyItems);
        } else {
            manyItems++;
            if(index == 0){
                addFront(data);
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
        if(head == null){
            return null;
        }
        if(head != null && head.getData() == data){
            head = head.getLink();
            manyItems--;
            return data;
        } else {
            IntNode curr = head;
            while(curr.getLink() != null && curr.getLink().getData() != data){
                curr = curr.getLink();
            }
            if(curr.getLink() != null){
                curr.setLink(curr.getLink().getLink());
                manyItems--;
                return data;
            }
        }

        return null;
    }

    public String toString(){
        String result = "{";
        IntNode curr = head;

        while(curr != null){
            result += curr.getData() + " - ";
            curr = curr.getLink();
        }

        if(!isEmpty()){
            result = result.substring(0, result.length() - 3);
        }
        result += "}";

        return result;
    }

    public int size(){
        return manyItems;
    }

    public boolean isEmpty(){
        return head == null;
    }
}
