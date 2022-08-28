
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

- typeorm : typeorm은 nodejs에서 실행되고 TypeScript로 작성된 객체 관계형  매퍼 라이브러리. typeorm은 MySQL, PostgreSQL, MariaDB, SQLite등 여러 데이터베이스를 지원함.

- ORM (Object Relational Mapping) : 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업. ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있다.


## 엔티티 생성을 위해 필요한 모듈 설치

npm install bcryptjs class-transformer class-validator --save
npm install @types/bcryptjs --save-dev

- bcryptjs : 비밀번호를 암호화해서 데이터베이스에 저장할 수 있게 한다.
- class-transformer : 일반 개체를 클래스 일부 인스턴스로 또는 그 반대로 변환
- class-validator : 데코레이터를 이용해서 요청에서오는 오브젝트의 프로퍼티를 검증하는 라이브러리.


## One To Many, Many To One

- 유저와 게시물 데이터의 관계 형성 (관계를 형성하기 위해서는 엔티티에 서로간의 필드를 넣어줘야 합니다.)
              - 게시글1
user          - 게시글2
              - 게시글3

OneToMany      ManyToOne