# debugging_localhost_server.py
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 8080  # 你可以改成其他端口，比如 3000
ADDRESS = ("", PORT)  # 空字符串表示监听所有本地 IP

class MyHandler(SimpleHTTPRequestHandler):
    """可扩展的请求处理器，可在此定制日志或拦截请求"""
    def log_message(self, format, *args):
        print(f"[Server Log] {self.address_string()} - {format % args}")

if __name__ == "__main__":
    print(f"🚀 本地调试服务器已启动：http://localhost:{PORT}")
    print("📁 当前目录将被当作网站根目录提供访问")
    print("按 Ctrl+C 可退出调试server\n")

    with HTTPServer(ADDRESS, MyHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 已停止服务器")
