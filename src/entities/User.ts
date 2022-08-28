import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index, In, OneToMany, BeforeInsert } from "typeorm"
import bcrypt from 'bcryptjs';
import Post from "./Post";
import Vote from "./Vote";
import BaseEntity from './Entity';

@Entity("users")
// Entity() 데코레이터 클래스는 User클래스가 엔티티임을 나타내는데 사용된다.
// CREATE TABLE user 부분이다

export class User extends BaseEntity {

    // Column() 데코레이터 클래스는 User엔티티의 email 및 username과 같은 다른 열을 나타내는데 사용된다.
    // Index()는 데이터베이스 인덱스를 생성한다. 엔티티 속성 또는 엔티티에 사용할 수 있다. 엔티티에 사용될 때 복합열로 인덱스를 생성할 수 있다.

    // 데이터배에스에 인덱스 생성 이유는? 
    // 책에서 목차가 특정 주제를 더 빨리찾을 수 있듯이 그러한 역할을 한다. 
    // 테이블 쿼리 속도를 올려준다. 특정 컬럼값을 가지고 열이나 값을 빠르게 찾을 수 있게 해준다.
    // 어떠한 정보를 찾을 때 처음부터 모든 데이터를 조회x . 데이터 파일 중간에서 검색위치를 빠르게 잡을 수 있다.
    // 데이터 양이 많고 변경보다 검색이 빈번한 경우 인덱싱을 하면 좋다.

    @Index()
    @IsEmail(undefined, { message: "이메일 주소가 잘못되었습니다." })
    @Length(1, 255, { message: "이메일 주소는 비워둘 수 없습니다." })
    @Column({ unique: true })
    email: string;

    @Index()
    @Length(3, 32, { message: "사용자 이름은 3자 이상이어야 합니다." })
    @Column({ unique: true })
    username: string

    @Column()
    @Length(6, 255, { message: '비밀번호는 6자리 이상이어야 합니다.' })
    password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]

    @OneToMany(() => Vote, (vote) => vote.user)
    votes: Vote[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6)
    }

}
