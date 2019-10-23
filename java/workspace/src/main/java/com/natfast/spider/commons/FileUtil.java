package com.natfast.spider.commons;

import java.io.*;

public class FileUtil {
    public static void main(String[] arguments) throws IOException {
        String[] data = { "137", "89", "82", "181", "50", "220", "103", "20" };
        FileWriter fw = new FileWriter("E:\\workspace\\src\\main\\java\\com\\natfast\\spider\\commons\\Buffered.txt");
//		fw.write("ok168");
//		fw.close();
        /**
         * 为了提高写入的效率，使用了字符流的缓冲区。
         * 创建了一个字符写入流的缓冲区对象，并和指定要被缓冲的流对象相关联。
         */
//        BufferedWriter bufw = new BufferedWriter(fw);
//
//        //使用缓冲区中的方法将数据写入到缓冲区中。
//        bufw.write(toStr(data));
//        bufw.newLine();
//        bufw.newLine();
//        bufw.write("!hello world !");
//        bufw.write("!hello world !");
//        //使用缓冲区中的方法，将数据刷新到目的地文件中去。
//        bufw.flush();
//        //关闭缓冲区,同时关闭了fw流对象
//        bufw.close();
        split();
    }

    public static void split(){
        BufferedWriter bufw = null;
        try {
            File f=new File("C:\\Users\\Administrator\\Desktop\\test.csv");
            BufferedReader bf = new BufferedReader(new FileReader(f));
            String line="";
            int i=0;
            while((line=bf.readLine())!="" && line!=null &&line!="\n" &&line.length()>10){
//                System.out.println((i++)+", "+line);
                String nline = line.substring(line.indexOf("成功")+2,line.length()-1);
                System.out.println(nline);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {

        }
    }

    public static synchronized boolean append(String[] s, String path) {
        BufferedWriter bufw = null;
        try {
            File f=new File("E:\\workspace\\"+path);
            FileWriter fw = new FileWriter(f,true);
            bufw = new BufferedWriter(fw);
            bufw.write(toStr(s));
            bufw.newLine();
            bufw.flush();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        } finally {
            try {
                bufw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static String toStr(String s[]) throws UnsupportedEncodingException {
        String split = ",";
        String buf = "";
        for(String i:s){
            buf +=i;
            buf +=split;
        }
        return new String(buf.getBytes("utf-8"),"utf-8");
    }
}
