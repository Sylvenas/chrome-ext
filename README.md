## reproduce bug step

- macOS Big Sur 11.1 

### install chrome ext

- 1.download this repository code
- 2.open `chrome://extensions/` page
- 3.Add the `src` folder to chrome ext

### check the custom resquest header

- 1.open [https://github.com/](https://github.com/) in chrome, and open the chrome dev tools(option ＋ command ＋ i),you can see that all requests have been added with a custom header(`experiment:hzzhaoxiangtao@corp.netease.com`)

![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8712202287/9ff5/159a/0ff9/1064b1a79795cdf3917f647d940ab7c9.png)

- 2.close the chrome dev tools,and refresh the page,then open the chrome dev tools,you will notice that the request does not add the custom header.

![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8712271757/318e/87dc/4f66/49b513614bf73202c8c176976f5a4a13.png)

> `https://github.com/` is just for example, u can try on any page.

## summary

- chrome dev tools status:**open**  
  modify request header success

- chrome dev tools status:**close**  
  modify request header fail
