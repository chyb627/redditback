
## 모듈 설치

npm install morgan nodemon express --save
npm install typescript ts-node @types/node @types/express @types/morgan --save-dev

- nodemon : 서버 코드를 변경 할 때마다 서버를 재시작함. 일을 자동으로 대신 해줌.
- ts-node : Node.js 상에서 TypeScript를 통하지 않고도, 직접 TypeScript를 실행시키는 역할을 한다.
- morgan : nodeJS에서 사용되는 로그 관리를 위한 미들웨어.
- @types/express @types/node : Express 및 NodeJS에 대한 Type 정의에 도움

## tsconfig.js 생성
npx tsc --init

-tsconfig.js : TypeScript로 짜여진 코드를 JavaScript로 컴파일하는 옵션을 설정하는 파일. TypeScript 컴파일은 tsc라는 명령어를 사용.


## 추가 모듈 설치

npm install pg typeorm reflect-metadata --save

- pg : postgreSQL 데이터베이스와 인터페이스하기 위한 nodeJS 모듈 모음
- typeorm : TypeScript 및 JavaScript 와 함께 사용할 수 있는 NodeJS에서 실행되는 ORM.


## typeorm 설정
npx typeorm init