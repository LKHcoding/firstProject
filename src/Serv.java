//package myServlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Serv
 */
// @WebServlet("/ajaxCon")
public class Serv extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public Serv() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        response.setContentType("application/x-json; charset=UTF-8");
        PrintWriter out = response.getWriter();
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        String datepick1 = request.getParameter("datepick");

        System.out.println("doget :" + name);
        System.out.println("deget :" + age);
        System.out.println("date :" + datepick1);

        out.print("Get ��� : �ȳ� �� �̸��� " + name + "�̰� ���̴� " + age + "����"); // response
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        response.setContentType("application/x-json; charset=UTF-8");
        PrintWriter out = response.getWriter();
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        String datepick2 = request.getParameter("datepick");
        String datepickButton = request.getParameter("datepickButton");
        
        System.out.println("datePickButton :" + datepickButton);
        System.out.println("datePick :" + datepick2);
        
        if(datepickButton==null) {
        	System.out.println("doget :" + name);
            System.out.println("deget :" + age);
            System.out.println("date :" + datepick2);
            out.println("Post��� : �ȳ� �� �̸��� " + name + "�̰� ���̴� " + age + "����"); // r
        }
        else {
        	if(datepick2 == "") {
        		out.println("����!!��¥�� �������ּ���!!");
        	}
        	else {
        		System.out.println("date :" + datepick2);
            	out.println("Post��� :"+" ��¥��" + datepick2); // r
        	}
        	
        }
        out.println("github testing���Դϴ�."); // r
    }
}
