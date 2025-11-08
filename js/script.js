// script.js
// 加载文章页
document.addEventListener("DOMContentLoaded", () => {
  const contentEl = document.getElementById("content"); //获取页面中 id 为 "content" 的元素，用来显示文章内容。
  const params = new URLSearchParams(window.location.search); //从当前网页的 URL 查询参数方法
  const file = params.get("file");// 查询”file“，将查询结果传参给 变量file

  if (contentEl && file) { //如果找到了 contentEl变量中的”"content"“ 元素，并且 URL 中确实有 file 参数，就继续加载文章。
    fetch(`posts/${file}`)  
      .then(res => res.text())  //使用 fetch() 从服务器加载 /posts/ 文件夹下对应的 Markdown 文件。
      .then(text => {
        contentEl.innerHTML = marked.parse(text);//使用 marked.parse(text) 把 Markdown 文本转成 HTML（marked 是一个 Markdown 解析库）。再把生成的 HTML 插入页面的 content 容器里显示出来。
      })       // 所有使用该js的网页，都在页面中加载了<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>，所以可以直接加载变量
      .catch(() => {
        contentEl.innerHTML = "<p>无法加载该页面。</p>";  //如果加载或解析出错（例如文件不存在），就显示一条错误提示。
      });
  }
});
