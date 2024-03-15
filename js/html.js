function setTagList(getListId, setTagName, setContents1, setContents2, code = "")
{
    $('#' + getListId).append
    (
        '<li id =' + setTagName + '>' + 
        '&lt;' + setTagName + '&gt;' +
        '<div class = "list-content">'+
            '<h6>- 설명</h6>' +
                '<p' + " " + 'id = ' + setTagName + "1" + '></p>' +
            '<h6>- 속성, 속성값</h6>' +
                '<p' + " " + 'id = ' + setTagName + "2" + '></p>' +
        '</div></li>'
    );

    for(var i = 0; i < setContents1.length; i++) 
    {
        $('#' + setTagName + "1").append
        (
            "· " + setContents1[i] + '<br>'
        );
    }

    for(var i = 0; i < setContents2.length; i++) 
    {
        $('#' + setTagName + "2").append
        (
            "· " + setContents2[i] + '<br>'
        );
    }

    $('#' + setTagName + "2").append(code + '<br>');
}

//https://developer.mozilla.org/ko/docs/Glossary/Tag->https://ko.wikipedia.org/wiki/HTML_%EC%9A%94%EC%86%8C의 태그 참고
setTagList ("list-a", "a", ["하이퍼링크를 추가해주는 태그이다"], ["href: 이동할 링크 주소", "target: 링크를 어떻게 열지", "target = _self(디폴트: 현재 페이지), _blank(새 탭), _parent(부모 페이지 iframe등이 쓰인 환경에서 사용), _top(최상위 페이지), 프레임 명(직접 명시 사용 가능)"]);
setTagList ("list-a", "abbr", ["단어의 축약형을 정의할 때 사용된다.", "HTML에 마우스커서를 잠시 올려보세요<abbr title = 'Hyper Text Markup Language'>HTML</abbr>"], ["title = (풀 네임) (풀네임)을 마우스 커서 아래 블록 형태로 띄어줌"]);
setTagList ("list-a", "acronym", ["HTML5부터 지원X", "대체: abbr 사용"], ["abbr과 동일"]);
setTagList ("list-a", "address",["어떤 매체와 연락가능한 정보를 적을 때 서식", "italic체로 표시, 위아래 공백이 자동 형성 됨", "아래를 보세요<article>소개는 여기까지 입니다. 저희 회사 주소<address>서울시 강남구 역삼동... </address>"], []);
setTagList ("list-a", "applet", ["HTML5 부터 지원X", "대체: embed, object"], []);
setTagList ("list-a", "area", ["이미지 맵에서 하이프링크를 부여할 영역을 결정하는 태그", "map 태그를 사용하여 이미지 맵을 만든후 자식 태그로 쓴다. "], ["shape = react(직사각형), circle(원), poly(폴리), default(전체)", "coords = 숫자, 숫자, 숫자, 숫자(좌표)", "href = 링크(이동할 링크)","target = a태그의 target속성값과 동일"]);
setTagList ("list-a", "article", [], []);
setTagList ("list-a", "aside", [], []);
setTagList ("list-a", "audio", [], []);
setTagList ("list-b", "b", [], []);
setTagList ("list-b", "base", [], []);
setTagList ("list-b", "basefont", [], []);
setTagList ("list-b", "bdi", [], []);
setTagList ("list-b", "bdo", [], []);
setTagList ("list-b", "big", [], []);
setTagList ("list-b", "blockquote", [], []);
setTagList ("list-b", "body", [], []);
setTagList ("list-b", "br", [], []);
setTagList ("list-c", "canvas", [], []);
setTagList ("list-c", "caption", [], []);
setTagList ("list-c", "center", [], []);
setTagList ("list-c", "cite", [], []);
setTagList ("list-c", "code", [], []);
setTagList ("list-c", "col", [], []);
setTagList ("list-c", "colgroup", [], []);
setTagList ("list-c", "command", [], []);
setTagList ("list-d", "datalist", [], []);
setTagList ("list-d", "dd", [], []);
setTagList ("list-d", "del", [], []);
setTagList ("list-d", "details", [], []);
setTagList ("list-d", "dfn", [], []);
setTagList ("list-d", "dialog", [], []);
setTagList ("list-d", "dir", [], []);
setTagList ("list-d", "div", [], []);
setTagList ("list-d", "dl",  [], []);
setTagList ("list-d", "dt",  [], []);
setTagList ("list-e", "em",  [], []);
setTagList ("list-e", "embed", [], []);
setTagList ("list-f", "fieldset", [], []);
setTagList ("list-f", "figcaption",  [], []);
setTagList ("list-f", "figure", [], []);
setTagList ("list-f", "font", [], []);
setTagList ("list-f", "footer", [], []);
setTagList ("list-f", "form", [], []);
setTagList ("list-f", "frame", [], []);
setTagList ("list-f", "frameset", [], []);
setTagList ("list-h", "h1 ~ 6", [], []);
setTagList ("list-h", "head", [], []);
setTagList ("list-h", "header",  [], []);
setTagList ("list-h", "hgroup", [], []);
setTagList ("list-h", "hr", [], []);
setTagList ("list-h", "html", [], []);
setTagList ("list-i", "iframe", [], []);
setTagList ("list-i", "img", [], []);
setTagList ("list-i", "input", [], []);
setTagList ("list-i", "ins", [], []);
setTagList ("list-k", "kdb", [], []);
setTagList ("list-k", "keygen", [], []);
setTagList ("list-l", "label", [], []);
setTagList ("list-l", "legend", [], []);
setTagList ("list-l", "li", [], []);
setTagList ("list-l", "link", [], []);
setTagList ("list-m", "map", [], []);
setTagList ("list-m", "mark", [], []);
setTagList ("list-m", "menu", [], []);
setTagList ("list-m", "meta", [], []);
setTagList ("list-m", "meter", [], []);
setTagList ("list-n", "nav", [], []);
setTagList ("list-n", "noframes", [], []);
setTagList ("list-n", "noscript", [], []);
setTagList ("list-o", "object", [], []);
setTagList ("list-o", "ol", [], []);
setTagList ("list-o", "optgroup", [], []);
setTagList ("list-o", "option", [], []);
setTagList ("list-o", "output", [], []);
setTagList ("list-p", "p", [], []);
setTagList ("list-p", "param", [], []);
setTagList ("list-p", "pre", [], []);
setTagList ("list-p", "progress", [], []);
setTagList ("list-q", "q", [], []);
setTagList ("list-r", "rp", [], []);
setTagList ("list-r", "rt", [], []);
setTagList ("list-r", "ruby", [], []);
setTagList ("list-s", "s", [], []);
setTagList ("list-s", "samp", [], []);
setTagList ("list-s", "script", [], []);
setTagList ("list-s", "section", [], []);
setTagList ("list-s", "select", [], []);
setTagList ("list-s", "small", [], []);
setTagList ("list-s", "syntaxhighlight", [], []);
setTagList ("list-s", "span", [], []);
setTagList ("list-s", "strike", [], []);
setTagList ("list-s", "strong", [], []);
setTagList ("list-s", "style", [], []);
setTagList ("list-s", "sub", [], []);
setTagList ("list-s", "summary", [], []);
setTagList ("list-s", "sup", [], []);
setTagList ("list-t", "table", [], []);
setTagList ("list-t", "tbody", [], []);
setTagList ("list-t", "td", [], []);
setTagList ("list-t", "textarea", [], []);
setTagList ("list-t", "tfoot", [], []);
setTagList ("list-t", "th", [], []);
setTagList ("list-t", "thead", [], []);
setTagList ("list-t", "time", [], []);
setTagList ("list-t", "title", [], []);
setTagList ("list-t", "tr", [], []);
setTagList ("list-t", "track", [], []);
setTagList ("list-t", "tt", [], []);
setTagList ("list-u", "u", [], []);
setTagList ("list-u", "ul", [], []);
setTagList ("list-v", "var", [], []);
setTagList ("list-v", "video", [], []);
setTagList ("list-w", "wbr", [], []);

/* <a> o
<abbr> o
<acronym> o
<address> o
<applet> o
<area> o
<article> o
<aside> o
<audio> o
<b> o
<base> o
<basefont> o
<bdi> o
<bdo> o
<big> o
<blockquote> o
<body> o
<br> o
<canvas>
<caption>
<center>
<cite>
<code>
<col>
<colgroup>
<command>
<datalist>
<dd>
<del>
<details>
<dfn>
<dialog>
<dir>
<div>
<dl>
<dt>
<em>
<embed>
<fieldset>
<figcaption>
<figure>
<font>
<footer>
<form>
<frame>
<frameset>
<h1> to <h6>
<head>
<header>
<hgroup>
<hr>
<html>
<i>
<iframe>
<img>
<input>
<ins>
<kbd>
<keygen>
<label>
<legend>
<li>
<link>
<map>
<mark>
<menu>
<meta>
<meter>
<nav>
<noframes>
<noscript>
<object>
<ol>
<optgroup>
<option>
<output>
<p>
<param>
<pre>
<progress>
<q>
<rp>
<rt>
<ruby>
<s>
<samp>
<script>
<section>
<select>
<small>
<syntaxhighlight>
<span>
<strike>
<strong>
<style>
<sub>
<summary>
<sup>
<table>
<tbody>
<td>
<textarea>
<tfoot>
<th>
<thead>
<time>
<title>
<tr>
<track>
<tt>
<u>
<ul>
<var>
<video>
<wbr></wbr> */