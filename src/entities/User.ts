import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Ticket from "./ticket";

@Index("user_pkey",["id"], {unique:true})
@Entity("user",{schema:"public"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;

    @Column("character varying",{ name: "phone", nullable: true })
    phone:string | null;

    @Column("character varying",{ name: "email", nullable: true })
    email:string | null;

    @Column("character varying",{ name: "password", nullable: true })
    password:string | null;

    @Column("character varying",{ name: "type", nullable: true })
    type:string | null;

    @OneToMany(()=>Ticket,(ticket) => ticket.user)
    tickets:Ticket[]
}

export default User;