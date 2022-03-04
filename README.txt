Node Practices

1. 패키지
    - 완전한 어플리케이션(nodemon, babel, webpack)
    - 프로젝트에서 사용하는 모듈(라이브러리)

2. 의존성 (Dependency)
    - 개발하느 프로젝트(어플리케이션, 패키지)에서 설치하고 사용하는 패키지
    - 일반 의존성
      개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
      $[Project-ex01]

    - 개발 의존성
      개발에 필요하거나 도움이 되는 패키지(dev tool) 배포에 포함되지 않는다.
      $[Project-ex01] npm i -D ...

      
3. 패키지 설치 방식
    1) 전역(global) 설치: 여러 프로젝트에서 공통으로 사용하는 도구 설치
    2) 지역(local) 설치: 특정 프로젝트에 종속적인 도구나 라이브러리
    3) 패키지 설치 
        $[Project-ex01] npm i ejs (local, general dependency)
        $[Project-ex01] npm i -D nodemon (local, dev. dependency)
        $[Project-ex01] npm i -g gulp (global)
        $[Project-ex01] npx gulp --version (설치 확인)
    4) 패키지 삭제
        $[project-ex01] npm un ejs (local install 삭제)
        $[project-ex01] npm un -g gulp (local, dev. dependency)
        $[project-ex01] npx gulp --version (삭제 확인)

----git-----            ----working A---               ----working B---
myprj                     myprj                          myprj
   /src                     /node_module
   package.json             /src
   package-lock.json        package.json
                      **ejs 3.1.6 --> async 2.1

4. Node(JavaScript) Project (FE/BE Application, package) 생성
    1) 프로젝트 생성 (mkdir)
    2) 프로젝트 이동 (cd)
    3) 프로젝트 초기화: 프로젝트 페니페스트 파일(package.json) 생성
        $[project-ex02] npm init -y

    * Application 개발 시 Module1 / Module2 등으로 나눠짐
      라이브러리도 필요함 -> orm ~
      모듈간의 의존 관계 형성
      Module System - import / export
      require - required ? / module 어쩌구로 export함
      위 둘은 호환성이 전혀 없다

5. Module
    1) 코어 모듈(fs, os, ... node에서 제공해주는 모듈)
    2) 파일 모듈: 파일 경로로 불러와서 모듈 안의 함수, 객체를 사용한다.
    3) npm 모듈: npm을 통해서 node_module에 설치하고 사용하는 모듈
        - 원격배포
        - 로컬배포

** /poscoict-math              /project-ex02
    |--package.json                  |--package.json
    |--poscoict-math.js   <--의존--  |--app01.js
                                     |--node_modules
                                          |--poscoict
                                               |-- app01 배포

6. npmjs.com(npm registry)에 내 패키지 배포 (생략)



7. helloweb-ex01: 웹 애플리케이션 만들어보기 (왕초보)
    1) app01: http: core module 기반
    2) app02: http, fs:  core module 기반
    3) app03: connect, serve-static: npm package 기반
    4) app04: connect, serve-static, connect-route: npm package 기반


8. helloweb-ex02: 웹 애플리케이션 만들어보기 (express 프레임워크)