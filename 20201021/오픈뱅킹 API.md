# 오픈뱅킹 API
## https://developers.openbanking.or.kr/
![img_openapi_openapi_02](https://user-images.githubusercontent.com/39182235/96674751-739a7a00-13a4-11eb-873b-234f1f0edbdc.jpg)

은행 공동의 인프라를 구축하여, 이용기관이 한번의 오픈뱅킹 가입만으로 시중은행의 공통된 서비스를 오픈 API 형태로 사용할 수 있는 플랫폼 서비스

![191218_pr-openbanking-](https://user-images.githubusercontent.com/39182235/96674755-74331080-13a4-11eb-82b3-023d4f80739f.png)

## 제공 기능

<img alt="open banking" src="https://user-images.githubusercontent.com/39182235/96673414-69c34780-13a1-11eb-94db-490505db33c9.png">

## Oauth 2.0 방식

오픈 API를 이용할 때 사용되는 표준화된 토큰 기반의 인증 방법

#### 자원 소유자(Resource Owner)

* 오픈플랫폼이 API를 통하여 제공하는 자원
* 즉 데이터의 원래 소유자를 의미

#### 자원 서버(Resource Server)

* 보호된 자원을 제공하는 서버를 의미
* 즉, 은행 오픈 API를 통하여 계좌와 관련된 각종 데이터를 제공하는 오픈플랫폼 서버가 해당

#### 클라이언트(Client) / 이용기관

* API를 호출하는 응용프로그램을 의미
* 즉, 이용기관이 오픈 API를 사용하여 개발한 앱 혹은 웹 프로그램이 해당
* 넓은 의미로 이용기관 자체를 의미

### 접근 권한 인증 과정

<img width="495" alt="그림1" src="https://user-images.githubusercontent.com/39182235/96674953-d0963000-13a4-11eb-9392-a40101223caa.png">

