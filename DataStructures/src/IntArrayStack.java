public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;

    private Integer[] stack;
    private int top;

    public IntArrayStack(){
        stack = new Integer[DEFAULT_CAPACITY];
        top = 0;
    }

    public IntArrayStack(int capacity){
        stack = new Integer[capacity];
        top = 0;
    }

    public Integer push(Integer data){
        if(empty()){
            top = 0;
        }
        stack[top] = data;
        if(top + 1 == stack.length){
            stack = exceedsCapacity();
        }
        top++;

        return data;
    }

    public Integer pop(){
        if(empty()){
            System.out.println("There's nothing in the stack.");
            return null;
        } else {
            Integer[] arr = new Integer[stack.length];
            Integer valuePopped = stack[top-1];
            for(int i=0; i<top; i++){
                arr[i] = stack[i];
            }
            stack = arr;
            top--;
            return valuePopped;
        }
    }

    public Integer peek(){
        if(empty()){
            System.out.println("There's nothing in the stack.");
            return null;
        }
        return stack[top-1];
    }

    public int search(Integer data){
        if (stack.length != 0){
            for(int i=top; i>=0; i--) {
                if (stack[i] == data) {
                    return top - i;
                }
            }
            return -1;
        }
        return -1;
    }


    public boolean empty(){
        if(stack[0] == null){
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

    public String toString(){
        String result = "{";

        for (int i = 0; i < stack.length; i++) {
            result += stack[i] + ", ";
        }

        if (!empty()){
            result = result.substring(0, result.length()-2);
        }

        result += "}";

        return result;
    }  
}
