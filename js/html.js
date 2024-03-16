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
// setTagList ("list-a", "a", ["하이퍼링크를 추가해주는 태그이다"], ["href: 이동할 링크 주소", "target: 링크를 어떻게 열지", "target = <br>_self(디폴트: 현재 페이지)<br>      _blank(새 탭)<br>    _parent(부모 페이지 iframe등이 쓰인 환경에서 사용)<br>     _top(최상위 페이지)<br> 프레임 명(직접 명시 사용 가능)"]);
// setTagList ("list-a", "abbr", ["단어의 축약형을 정의할 때 사용된다.", "HTML에 마우스커서를 잠시 올려보세요<abbr title = 'Hyper Text Markup Language'>HTML</abbr>"], ["title = (풀 네임) (풀네임)을 마우스 커서 아래 블록 형태로 띄어줌"]);
// setTagList ("list-a", "acronym", ["HTML5부터 지원X", "대체: abbr 사용"], ["abbr과 동일"]);
// setTagList ("list-a", "address",["어떤 매체와 연락가능한 정보를 적을 때 서식", "italic체로 표시, 위아래 공백이 자동 형성 됨", "아래를 보세요<article>소개는 여기까지 입니다. 저희 회사 주소<address>서울시 강남구 역삼동... </address>"], []);
// setTagList ("list-a", "applet", ["HTML5 부터 지원X", "대체: embed, object"], []);
// setTagList ("list-a", "area", ["이미지 맵에서 하이프링크를 부여할 영역을 결정하는 태그", "map 태그를 사용하여 이미지 맵을 만든후 자식 태그로 쓴다. "], ["shape = react(직사각형), circle(원), poly(폴리), default(전체)", "coords = 숫자, 숫자, 숫자, 숫자(좌표)", "href = 링크(이동할 링크)","target = a태그의 target속성값과 동일"]);
// setTagList ("list-a", "article", ["독립적인 콘텐츠 유닛"], []);
// setTagList ("list-a", "aside", ["별도로 분리된 추가 정보", "광고 배너 같은 곳에 사용"], []);
// setTagList ("list-a", "audio", ["음악, 오디오 스트림과 같은 사운드를 정의할 때 사용"], []);
// setTagList ("list-b", "b", ["글자를 굵게 해줌", "bold의 약자", "CSS의 font-weight: bold와 같음"], []);
// setTagList ("list-b", "base", ["head 안에 선언", "링크, css링크 이미지 등의 링크에 베이스 링크 값을 준다. "], []);
// setTagList ("list-b", "basefont", ["HTML5부터 지원X", "모든 텍스트를 위한 기본 색상 글꼴 집합(font-family)등을 정의할 때 사용", "CSS를 사용해야함"], []);
// setTagList ("list-b", "bdi", ["bi-drectional-isolation의 약자", "주위의 텍스트들과 다른 방향으로 써지는 텍스트 영역을 나타냄", "예로 아랍어는 right to left(RTL)이므로, 영어 left-to-right(LTR)과 다름"], []);
// setTagList ("list-b", "bdo", ["다른 방향으로 문자를 렌더링 하고 싶을 때 사용"], ["dir = rtl(오른쪽에서 왼쪽), ltr(왼쪽에서 오른쪽)"]);
// setTagList ("list-b", "big", ["HTML5부터 지원X", "글자 크기가 큰 텍스트를 지원"], []);
// setTagList ("list-b", "blockquote", ["인용 블록 정의에 사용", "짧은 인용구는 q태그 사용하는 것이 옳음. "], []);
// setTagList ("list-b", "body", ["HTML문서의 모든 내용을 포함하는 부분", "문서에서 단 하나만 존재"], []);
// setTagList ("list-b", "br", ["이 태그를 만난 이후 문장은 다음 줄에 랜더링 됨", "break의 약자"], []);
// setTagList ("list-c", "canvas", ["그래픽 구현을 위한 태그", "다른 프로그램 필요 없이 사용 가능", "그림 외에 그림의 변환, 에니메이션 과 같은 효과도 표현 가능"], []);
// setTagList ("list-c", "caption", ["테이블, 사진 등에 붙는 설명을 정의할 때 사용", "table 태그는 하나의 caption태그만 사용 가능", "table 태그 안에 포함되어 사용됨"], []);
// setTagList ("list-c", "center", ["HTML5부터 지원X", "대신CSS사용"], []);
// setTagList ("list-c", "cite", ["창작물의 제목 정의에 사용"], []);
// setTagList ("list-c", "code", ["코드를 나타낼 때 사용", "지원은 하지만 CSS를 사용하여 작성하면 더 효과있게 작성 가능"], []);
// setTagList ("list-c", "col", ["colgroup에 속하는 각 열의 속성을 정의(크기, 색)"], []);
// setTagList ("list-c", "colgroup", ["테이블에서 하나이상의 열을 서식지정을 위해 묶을 때 사용"], []);
// setTagList ("list-c", "command", ["실행할 수 있는 명령"], []);
// setTagList ("list-d", "datalist", ["input 태그의 옵션 리스트를 미리 정의할 때 사용"], []);
// setTagList ("list-d", "dd", ["dt 태그의 설명에 사용", "이렇게 씀<dl><dt>대한민국</dt><dd>동아시아의 나라</dd></dl>"], []);
// setTagList ("list-d", "del", ["텍스트 가운데 라인을 그어서 문서 중간에서 삭제되어 빠짐을 표현할 때 사용", "ins태그와 마찬가지", "이렇게 씀 이곳은 <del>132번지</del> 122번지 입니다. "], []);
// setTagList ("list-d", "details", ["사용자가 클릭하여 열고 닫을 수 있게 해줌", "이렇게 씀 <details><summary>참여자 현황</summary><ul><li>아무개1</li><li>아무개2</li><li>아무개3</li></ul></details>"], []);
// setTagList ("list-d", "dfn", ["어떤 용어에 대한 정의", "자식 요소로 사용되며 부모 요소에 해당 용어의 정의가 있어야 함"], []);
// setTagList ("list-d", "dialog", ["대화 상자를 만들어 줌", "HTML5부터 새롭게 추가된 태그","이렇게 씀 <dialog open><div>대화 상자입니다. </div></dialog>"], []);
// setTagList ("list-d", "dir", ["HTML5부터 지원 안함", "ul 이나 CSS 사용"], []);
// setTagList ("list-d", "div", ["레이아웃을 나눌 때 쓰임", "아주 많이 쓰임 CSS와 연동하여 사용"], []);
// setTagList ("list-d", "dl",  ["dd, dt태그를 감쌈", "즉 용어와 정의를 리스트형 식으로 만든 것을 정의하는 태그"], []);
// setTagList ("list-d", "dt",  ["dl, dt, dd에서 용어를 정의하는 부분"], []);
// setTagList ("list-e", "em",  ["강조된 텍스트", "HTML5지원은 하나 CSS를 써서 더 다양한 효과를 누리자. "], []);
// setTagList ("list-e", "embed", ["HTML5에서 추가", "외부 컨텐츠를 포함할 수 있는 컨테이너 역할"], []);
// setTagList ("list-f", "fieldset", ["form에서 연관된 요소를 하나의 그룹으로 묶을 때 사용"], []);
// setTagList ("list-f", "figcaption",  ["figure요소의 캡션을 정의할 때 사용", "figure요소 내부에 사용"], []);
// setTagList ("list-f", "figure", ["삽화, 다이어그램, 사진 처럼 문서의 주요 흐름과는 독립적인 컨텐츠 정의에 사용"], []);
// setTagList ("list-f", "font", ["HTML5 지원 X", "폰트의 색상, 크기 정의 시 사용"], ["color = rgb(숫자, 숫자, 숫자)", "face = 글꼴", "size = 숫자", "위 속성, 속성값 모두 HTM5부터 지원X"]);
// setTagList ("list-f", "footer", ["웹 문서의 footer 정의시 사용", "저자정보, 저작권 정보, 연락처, 사이트 맵, 페이지 탑 버튼을 구현하는 위치", "HTML문서 하나에 여러개의 footer가 포함될 수 있음"], []);
// setTagList ("list-f", "form", ["부모요소로 사용", "사용자로부터 입력받을 수 있는 입력폼 정의시 사용", "폼의 요소는 다음 요소를 하나 이상 포함 가능", "button태그", "fieldset 태그", "input 태그", "label 태그", "option 태그", "optgroup태그", "select태그", "textarea태그"], []);
// setTagList ("list-f", "frame", ["HTML5부터 지원 X"], []);
// setTagList ("list-f", "frameset", ["HTML5부터 지원 X"], []);
// setTagList ("list-h", "h1", ["본문의 제목과 그 하위 제목 정의에 사용", "h1 ~ h6까지 존재"], []);
// setTagList ("list-h", "head", ["부모 태그", "웹 문서의 머리", "브라우저에 표현은 안됨", "title, meta, link, style, script 태그가 들어감"], []);
// setTagList ("list-h", "header",  ["웹 문서의 header를 정의할 때 사용"], []);
// setTagList ("list-h", "hgroup", ["HTML5부터 지원X", "부모 태그", "h1~h6요소 p요소 외에 포함 x 내용을 묶을 때 사용"], []);
// setTagList ("list-h", "hr", ["수평 가로선을 그어줌", "문서의 내용 구분시 사용", "이렇게 됨↓ <hr>"], []);
// setTagList ("list-h", "html", ["모든 태그의 루트가 됨", "html이 작용하는 범위를 지정하는 태그", "DTD(!DOCTYPE html태그)를 제외한 전체를 감싼다. "], []);
// setTagList ("list-i", "iframe", ["인라인 프레임의 약자", "HTML 문서 안에 다른 문서를 포함할 때 사용"], []);
// setTagList ("list-i", "img", ["이미지 정의에 사용", "이미지가 직접 문서에 들어가는 것이 아니라, 링크 되는 것", "src, alt 속성을 반드시 명시해야함"], []);
// setTagList ("list-i", "input", ["빈 태그", "라벨의 자식 요소를 사용하여 라벨을 붙일 수 있음", "사용자로 부터 입력받을 수 있는 입력 필드 정의에 사용"], []);
// setTagList ("list-i", "ins", [], []);
// setTagList ("list-k", "kdb", [], []);
// setTagList ("list-k", "keygen", [], []);
// setTagList ("list-l", "label", [], []);
// setTagList ("list-l", "legend", [], []);
// setTagList ("list-l", "li", [], []);
// setTagList ("list-l", "link", [], []);
// setTagList ("list-m", "map", [], []);
// setTagList ("list-m", "mark", [], []);
// setTagList ("list-m", "menu", [], []);
// setTagList ("list-m", "meta", [], []);
// setTagList ("list-m", "meter", [], []);
// setTagList ("list-n", "nav", [], []);
// setTagList ("list-n", "noframes", [], []);
// setTagList ("list-n", "noscript", [], []);
// setTagList ("list-o", "object", [], []);
// setTagList ("list-o", "ol", [], []);
// setTagList ("list-o", "optgroup", [], []);
// setTagList ("list-o", "option", [], []);
// setTagList ("list-o", "output", [], []);
// setTagList ("list-p", "p", [], []);
// setTagList ("list-p", "param", [], []);
// setTagList ("list-p", "pre", [], []);
// setTagList ("list-p", "progress", [], []);
// setTagList ("list-q", "q", [], []);
// setTagList ("list-r", "rp", [], []);
// setTagList ("list-r", "rt", [], []);
// setTagList ("list-r", "ruby", [], []);
// setTagList ("list-s", "s", [], []);
// setTagList ("list-s", "samp", [], []);
// setTagList ("list-s", "script", [], []);
// setTagList ("list-s", "section", [], []);
// setTagList ("list-s", "select", [], []);
// setTagList ("list-s", "small", [], []);
// setTagList ("list-s", "syntaxhighlight", [], []);
// setTagList ("list-s", "span", [], []);
// setTagList ("list-s", "strike", [], []);
// setTagList ("list-s", "strong", [], []);
// setTagList ("list-s", "style", [], []);
// setTagList ("list-s", "sub", [], []);
// setTagList ("list-s", "summary", [], []);
// setTagList ("list-s", "sup", [], []);
// setTagList ("list-t", "table", [], []);
// setTagList ("list-t", "tbody", [], []);
// setTagList ("list-t", "td", [], []);
// setTagList ("list-t", "textarea", [], []);
// setTagList ("list-t", "tfoot", [], []);
// setTagList ("list-t", "th", [], []);
// setTagList ("list-t", "thead", [], []);
// setTagList ("list-t", "time", [], []);
// setTagList ("list-t", "title", [], []);
// setTagList ("list-t", "tr", [], []);
// setTagList ("list-t", "track", [], []);
// setTagList ("list-t", "tt", [], []);
// setTagList ("list-u", "u", [], []);
// setTagList ("list-u", "ul", [], []);
// setTagList ("list-v", "var", [], []);
// setTagList ("list-v", "video", [], []);
// setTagList ("list-w", "wbr", [], []);

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