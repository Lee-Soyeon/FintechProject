# 오픈뱅킹 API

* 은행 공동의 인프라를 구축하여, 이용기관이 한번의 오픈뱅킹 가입만으로 시중은행의 공통된 서비스를 오픈 API 형태로 사용할 수 있는 플랫폼 서비스
* https://developers.openbanking.or.kr/

![img]("https://www.open-platform.or.kr/images/img_openapi_openapi_02.jpg")

## 제공 기능

<img width="673" alt="open banking" src="https://user-images.githubusercontent.com/39182235/96673414-69c34780-13a1-11eb-94db-490505db33c9.png">

## Oauth 2.0 방식

* 오픈 API를 이용할 때 사용되는 표준화된 토큰 기반의 인증 방법

### 자원 소유자(Resource Owner)

* 오픈플랫폼이 API를 통하여 제공하는 자원
* 즉 데이터의 원래 소유자를 의미

### 자원 서버(Resource Server)

* 보호된 자원을 제공하는 서버를 의미
* 즉, 은행 오픈 API를 통하여 계좌와 관련된 각종 데이터를 제공하는 오픈플랫폼 서버가 해당

### 클라이언트(Client) / 이용기관

* API를 호출하는 응용프로그램을 의미
* 즉, 이용기관이 오픈 API를 사용하여 개발한 앱 혹은 웹 프로그램이 해당
* 넓은 의미로 이용기관 자체를 의미
