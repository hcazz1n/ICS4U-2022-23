public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;

    private Integer[] stack;
    private int top;

    public IntArrayStack(){
        stack = new Integer[DEFAULT_CAPACITY];
        top = -1;
    }

    public IntArrayStack(int capacity){
        stack = new Integer[capacity];
        top = -1;
    }

    public void push(Integer data){
        if(empty()){
            top = 0;
        }
        stack[top] = data;
        if(top + 1 == stack.length){
            stack = exceedsCapacity();
        }
        top++;
    }

    public Integer pop(){
        if(empty()){
            System.out.println("There's nothing in the stack.");
        } else {
            Integer[] arr = new Integer[stack.length];
            Integer valuePopped = stack[top];
            for(int i=0; i<top; i++){
                arr[i] = stack[i];
            }
            stack = arr;
            top--;
            return valuePopped;
        }
        return null;
    }

    public Integer peek(){
        if(empty()){
            System.out.println("There's nothing in the stack.");
            return null;
        }
        return stack[top];
    }

    public int search(){
        return 1000;
    }

    public boolean empty(){
        if(stack == null){
            return true;
        }
        return false;
    }

    public Integer[] exceedsCapacity() {
        Integer[] arr = new Integer[stack.length * 2];
        for(int i=0; i<stack.length; i++){
            arr[i] = stack[i];
        }
        return arr;
    }
}
