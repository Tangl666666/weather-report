/*
1.块级元素和行内元素是布局中常见的两种基本元素，但是未必有很多人深入的研究它们的细微差别。

　　常见块级元素：div  p  form ul ol li 等；

　　常见的行内元素：span stronh em a input label img;

它们的区别主要有以下几点：
1.块级元素独自占一行且宽度会占满父元素宽度，行内元素不会独占一行，相邻行内元素可以排在同一行。
2.块级元素可以设置weith和height，行内元素设置width和height无效，而且块级元素即使设置宽度也还是独占一行。
3.块级元素可以设置margin和padding属性，行内元素水平方向的margin和padding如margin-left、padding-right可以产生边距效果，但是竖直方向的如padding-top和margin-bottom不会产生边距效果
4.最后是块级元素和行内元素的相关属性：display

　　其中块级元素对应display：block，行内元素对应display：inline。可以通过修改元素的display属性来切换行内元素和块级元素,如可将div变为inline元素，将span变为block元素。

补充说明一个属性：display：inline-block；可以让元素具有块级元素和行内元素的特性：既可以设置长宽，可以让padding和margin生效，又可以和其他行内元素并排。是一个很实用的属性

另一个网站对inline-block特点的描述：将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，允许空格。(准确地说，应用此特性的元素呈现为内联对象，周围元素保持在同一行，但可以设置宽度和高度地块元素的属性)
旁边的内联对象会被呈递在同一行内的效果代码如下：
<div >
    		<span style="border: 1px solid black;color: yellow;">天气应用维萨撒大大所多</span>
    		<div style="border: 1px solid black;display: inline-block;padding-top: 100px;margin-top: 0px">唐亮</div>
</div>



2.CSS vertical-align 属性
vertical-align 属性设置元素的垂直对齐方式。
该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。
该项目里我直接用值来设置的，一般用于一段文字和图片写在一起时设置

3.跨域访问要用jsonp访问，具体的见本项目script.js文件的注释
*/