# Loreal
### Site : https://selly7183.github.io/portfoilo-loreal/index.html
![loreal](https://user-images.githubusercontent.com/88068412/210552343-d059c391-55a4-4033-9258-1c5c715e0519.png)

1. Loreal Group 사이트 리뉴얼.
2. Locomotive 플러그인을 사용해서 전체적으로 스크롤이 부드럽게 되도록 설정.
3. Sass 사용.
4. JavaScript 사용.
5. class를 이용해서 header, footer include 시킴.
6. 반응형작업까지 100% 완료.
7. 웹표준성 검사 완료.
8. git hub에 배포완료.
>
    <Main>
        1. Footer를 fixed로 가장 밑에 붙게 한 뒤 각각의 section의 z-index값을 활용해서 인터렉션을 만듬.
        2. 클래스 네임에 .is-inview가 붙으면 해당 section에 도달했을 때 addClass로 애니메이션이 동작하도록 만듬.
        3. gsap 플러그인을 사용해서 이미지가 마우스에 따라 움직이는 모션 만듬. (x: moveX, y:moveY, ease:'slow' ...)
        4. main 동영상이 아이폰에서 전체화면으로 보여지는 이슈가 있어서 playsinline 속성을 추가해줌.
> 
    <About>
        1. 단어 하나씩 애니메이션을 줘서 부드럽게 흐르는 텍스트 애니메이션 효과를 만듬.
        2. 애니메이션 delay값을 transition-delay: calc(0.1s * var(--word-index)); 로 순차적으로 텍스트가 나오게 효과를 줌.
        3. 애니메이션 키프레임으로 translateX()값을 이용해서 텍스트 overflow 효과 만듬.
>   
    <Commitment>
        1. 링크를 누르면 Main의 #commitment로 이동되게 만듬.
        2. 링크를 누르면 자꾸 해당 section으로 가는게 아니라 맨위로 올라가지는 버그가 있어서
           if (window.location.hash) {
              var hash = window.location.hash.substring(1);
              const target = document.getElementById(hash);
              scroll.scrollTo(target);
            }
        3. 해당 스크립트 추가해서 오류 해결.
>   
    <Brands>
        1. locomotive 플러그인 자체에 있는 data-scroll-sticky 옵션을 활용해서 fixed 효과를 주었고, data-scroll-call 속성을 사용해서 callValue가 각각의 data 속성과 일치할때 navBtn 링크들에 active를 add,remove해줌.
        2. data-scroll-repeat='true' 를 통해 스크롤을 반복했을 때에도 해당 인터렉션이 반복되도록 설정을 줌.
 >
    <Magazine>
        1. LOLEAL GROUP 홈페이지에 NEWS 부분을 BEAUTY MEGAGINE 이라는 컨셉으로 페이지를 새롭게 제작함.
        2. [data-filter]값으로 각각의 [data-type] 값을 줘서 스크립트 처리로 해당 data로 tab 이동이 가능하게 만듬.
        3. 해당 글을 누르면 상세 페이지로 이동되도록 BEAUTY MEGAGINE detail 페이지를 제작.
>  
    <Contact>
        1. LOLEAL GROUP 홈페이지에는 없던 페이지인데 레퍼런스 사이트를 보고 제작하게됨.
        2. contact join form을 만들었고, 아무 내용도 입력하지 않고 submit 버튼을 누르면 text의 length에 따라서 createElement로 p를 만들어서 append로 밑에 경고 메세지가 각각 뜨도록 스크립트 처리함.
        3. 알맞게 입력했다면 result.html로 이동되게 만듬.
>
        * <class로 include시키기>
	    
        class MyHeader extends HTMLElement {
	        connectedCallback() {
		    this.innerHTML = `
                	<header>...</header>  
                    `;
	        }
        }
        customElements.define("my-header", MyHeader);   
        
        1) 먼저, 커스텀 요소 자바스크립트 클래스를 만듬.
        2) connectedCallback는 사용자 정의 요소가 문서 연결 요소에 추가될 때마다 호출됨.
        3) 페이지에 사용자 정의 요소를 등록하려면 CustomElementRegistry.define()메소드를 사용. 
        4) 매개 변수에서 요소 이름을 지정한 다음 해당 기능을 정의하는 클래스 이름을 지정합니다.
  
