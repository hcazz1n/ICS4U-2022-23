public class IntListStack {
    private IntNode head;
    private int manyItems;

    public IntListStack(){
        this.head = null;
        this.manyItems = 0;
    }

    public Integer push(Integer data){
        head = new IntNode(data, head);
        manyItems++;
        return data;
    }

    public Integer pop(){
        Integer temp = head.getData();
        if(head == null){
            return null;
        } else {
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public Integer peek(){
        if(empty()){
            return null;
        } else {
            return head.getData();
        }
    }

    public int search(Integer data){
        int distance = 0;
        IntNode curr = head;
        if(empty()){
            return -1;
        } for(int i=manyItems; i>0; i--){
            if(curr.getData() == data){
                return distance;
            } else {
                distance++;
                curr = curr.getLink();
            }
        }
        return -1;
    } 

    public boolean empty() {
        if(head == null){
            return true;
        } else {
            return false;
        }
    }

    public String toString() {
        String result = "{";
        IntNode curr = head;

        while(curr != null){
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }
        
        if(!empty()){
            result = result.substring(0, result.length()-2);
        }
        result += "}";

        return result;
    }



}
