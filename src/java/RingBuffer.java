import java.util.*;
import java.io.*;

class CircularBuffer {
    private int DEFAULT_CAPACITY=10;
    private int capacity;
    private int readSequence;
    private int writeSequence;
    private ArrayList<Integer> data;



    public CircularBuffer(int capacity) {
        this.capacity = (capacity < 1) ? DEFAULT_CAPACITY : capacity;
        this.data = new ArrayList<Integer>(this.capacity);
        this.readSequence = 0;
        this.writeSequence = -1;
    }
    
    public Boolean Offer(int element){
        boolean isFilled = (this.writeSequence - this.readSequence) + 1 == this.capacity;
        if(!isFilled){
            this.data.add((++this.writeSequence)%this.capacity, element);
            return true;
        }
        return false;
    }

    public Integer Poll() {
        boolean isEmpty = this.writeSequence < this.readSequence;
        if(!isEmpty){
            int obj = this.data.get(this.readSequence++);
            return obj;
        }
        return null;
    }


}


class Main {
    public static void main(String args[]) throws IOException {
        System.out.println("SkeletonCode");
    }

}