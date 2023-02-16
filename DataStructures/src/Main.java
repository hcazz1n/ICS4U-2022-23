import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
    
        Scanner in = new Scanner(System.in);
        
        String theWord = in.nextLine();
        
        String word = "";
        String wordReverse = "";
        
        if(theWord.length() == 2){
            word += word.substring(0, 1);
            word += " ";
            word += word.substring(1);
        } else if(theWord.length() == 3){
        }
        }else {
            for(int i=0; i<theWord.length() - 2; i++){
                word += word.substring(i, i+1);
                word += " ";
            }
        }
        
        for(int i=theWord.length()-1; i > 1; i++){
            wordReverse += word.substring(i-1, i);
            wordReverse += " ";
        }
        
        if(word.substring(word.length() - 1).equals(" ")){
            word = word.substring(0, word.length() - 1);
        }
        
        if(wordReverse.substring(wordReverse.length() - 1).equals(" ")){
            word = wordReverse.substring(0, wordReverse.length() - 1);
        }
        
        int row = Integer.parseInt(in.nextLine());
        int col = Integer.parseInt(in.nextLine());
        
        int totalWordCount = 0;
        
        for(int i=0; i<row; i++){
            String line = in.nextLine();
            if(line.indexOf(word) > 0 || line.indexOf(wordReverse) > 0){
                totalWordCount++;
            }
        }
        
        System.out.println(totalWordCount);
    
        // Scanner in = new Scanner(System.in);
        
        // int wrapping = 0;
        
        // int c = Integer.parseInt(in.nextLine());
        
        // String r1 = in.nextLine();
        // int[] arr1 = new int[c];
        // for(int i=0; i<arr1.length; i++){
        //     arr1[i] = Integer.parseInt(r1.substring(0 + i*2, 1 + i*2));
        // }
        
        // String r2 = in.nextLine();
        // int[] arr2 = new int[c];
        // for(int i=0; i<arr2.length; i++){
        //     arr2[i] = Integer.parseInt(r2.substring(0 + i*2, 1 + i*2));
        // }
        
        // if(c < 2000 || c == 2000){
        //     for(int i=0; i<arr1.length; i++){
        //         if(i != arr1.length - 1){
        //             if(arr1[i] == 1 && arr1[i+1] == 1){
        //                 int k = i;
        //                 int count = 0;
        //                 while(arr1[k] == 1){
        //                     count++;
        //                     if(k == arr1.length - 1){
        //                         break;
        //                     } else {
        //                         k++;
        //                     }   
        //                 }
        //                 wrapping += count + 2;
        //                 i = i + count - 1;
        //             } else if(arr1[i] == 1){
        //                 wrapping += 3;
        //             }
        //         } else {
        //             if(arr1[i] == 1){
        //                 wrapping += 3;
        //             }
        //         }
        //     }
            
        //     for(int i=0; i<arr2.length; i++){
        //         if(i != arr2.length - 1){
        //             if(arr2[i] == 1 && arr2[i+1] == 1){
        //                 int k = i;
        //                 int count = 0;
        //                 while(arr2[k] == 1){
        //                     count++;
        //                     if(k == arr2.length - 1){
        //                         break;
        //                     } else {
        //                         k++;
        //                     }   
        //                 }
        //                 wrapping += count + 2;
        //                 i = i + count - 1;
        //             } else if(arr2[i] == 1){
        //                 wrapping += 3;
        //             }
        //         } else {
        //             if(arr2[i] == 1){
        //                 wrapping += 3;
        //             }
        //         }
        //     }
            
        //     for(int i=0; i<c; i++){
        //         if(arr1[i] == 1 && arr2[i] == 1 && i % 2 == 0){
        //             int k = i;
        //             int count = 0;
        //             while(arr1[k] == 1){
        //                 count++;
        //                 if(k == arr2.)
        //             }
        //         }
        //     }
        // }
        
        // System.out.println(wrapping);
    
    /*Question 3
        Scanner in = new Scanner(System.in);
        
        ArrayList<String> availability = new ArrayList<>();
        
        int people = Integer.parseInt(in.nextLine());

        for(int i=0; i<people; i++){
            String days = in.nextLine();
            availability.add(days);
        }
       
        int maxCount = 1;
        String days = "";
        //boolean hasChecked = false;
        
        for(int i=0; i<5; i++){
            int count = 0;
            for(int j=0; j<people; j++){
                if(availability.get(j).substring(i, i+1).equals("Y")){
                    count++;
                }
            }
            if(count == people){
                days = "";
                days += i+1;
                break;
            }
            if(count == maxCount){
                days += ",";
                days += i+1;
            }
            if(count > maxCount){
                maxCount = count;
                days = "";
                days += i+1;
            }
            // if(hasChecked){
            //     if(count == maxCount || count > maxCount){
            //         if(count > maxCount){
            //             maxCount = count;
            //             days = "";
            //             days += i+1;
            //         } else {
            //             maxCount = count;
            //             days += "," + i+1;
            //         }
            //     }
            // } else {
            //     if(count > maxCount){
            //         maxCount = count;
            //         days = "";
            //         days += i+1;
            //     }
            // }
        }
        System.out.println(days);
    */
        /*Question 1
        Scanner in = new Scanner(System.in);
        
        int score = 0;
        
        int packagesDelivered = Integer.parseInt(in.nextLine());
        
        int collisions = Integer.parseInt(in.nextLine());
        
        for(int i=0; i<packagesDelivered; i++){
            score += 50;
        }
        
        for(int i=0; i<collisions; i++){
            score -= 10;
        }
        
        if(packagesDelivered > collisions){
            score += 500;
        }
        
        System.out.println(score);
        */
        
        /*Question 2
        Scanner in = new Scanner(System.in);
        
        int totalSpice = 0;
        
        int numPeppers = Integer.parseInt(in.nextLine());
        
        for(int i=0; i<numPeppers; i++){
            String name = in.nextLine();
            if(name.equals("Poblano")){
                totalSpice += 1500;
            } else if(name.equals("Mirasol")){
                totalSpice += 6000;
            } else if(name.equals("Serrano")){
                totalSpice += 15500;
            } else if(name.equals("Cayenne")){
                totalSpice += 40000;
            } else if(name.equals("Thai")){
                totalSpice += 75000;
            } else if(name.equals("Habanero")){
                totalSpice += 125000;
            }
        }
        
        System.out.println(totalSpice);
        */
    }
}

