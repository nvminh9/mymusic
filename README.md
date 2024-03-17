# README file
#                       **mymusic** 🎵🎵
   **Sau khi tải về , cần làm những việc sau đây để có thể chạy được:**
- Tất cả các thư mục 📁, các file khi tải về cần được giải nén và đặt trong cùng một thư mục cha 📁 có tên là **my_django_project**(có thể đặt tên tùy ý).
- Sau khi các thư mục đều nằm trong một thư mục cha, vào VS Code chọn **Open Folder-><thư mục cha>**, ở giao diện VS Code chọn** View->Command Palette** để mở cửa sổ lệnh, sau đó chuyển nó thành **cmd** để dễ làm việc  
- Sau đó cần cài **virtual-environment** (môi trường ảo) lên thư mục cha đó, tiến hành cài đặt môi trường ảo ngay trên **cmd của thư mục cha** trong VS Code, và sau đó cài thêm **python** cùng với **django** (chú ý nên cài python và django phiên bản có **tương thích**) để chạy được project.
- Sau đó cài thư viện **pillow** để dùng cho việc xử lý ảnh trên web sau này.
- Sau khi đã cài môi trường và thư viện, dùng lệnh cd để chuyển vào thư mục app :
  **cd mymusic_home**
- Tại thư mục app, nhập các lệnh sau :
  + **python manage.py makemigrations** (lệnh này tạo các file di trú dùng để thực hiện di trú db)
  + **python manage.py migrate** (lệnh này thực hiện di trú)
  + **python manage.py runserver** (sau khi migrate thành công, thì chạy lệnh này để khởi chạy Server với Port mặc định là 8000, ghi thêm Port sau chữ runserver để đổi Port)
- Cuối cùng lên trình duyệt gõ **127.0.0.1:8000** để kiểm tra .
  
**English:**

  **After downloading, you need to do the following to run it:**
- All folders 📁 and downloaded files need to be unzipped and placed in the same parent folder 📁 named my_django_project (can be named arbitrarily).
- After all folders are in a parent folder, go to VS Code and select **Open Folder-><parent folder>**, in the VS Code interface select **View->Command Palette** to open the command window, then convert it to **cmd** for ease of work
- Then you need to install virtual-environment on that parent folder, install the virtual environment right on the cmd of the parent folder in VS Code, and then install python along with django (note that you should install python and django compatible versions) to run the project.
- Then install the **pillow** library to use for image processing on the web later.
- After installing the environment and libraries, use the cd command to move to the app directory:
    **cd mymusic_home**
- In the app directory, enter the following commands:
  + **python manage.py makemigrations** (this command creates migration files used to perform db migrations)
  + **python manage.py migrate** (this command performs migration)
  + **python manage.py runserver** (after successful migration, run this command to launch the Server with default Port 8000, add Port after runserver to change Port)
Finally, go to the browser and type **127.0.0.1:8000** to check.
