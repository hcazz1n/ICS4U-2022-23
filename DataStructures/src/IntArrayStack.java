public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;

    private Integer[] data;
    private int top;

    public IntArrayStack(){
        data = new Integer[DEFAULT_CAPACITY];
    }
}
