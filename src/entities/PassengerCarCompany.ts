import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("passengerCarCompany_pkey",["id"], {unique:true})
@Entity("passengerCarCompany",{schema:"public"})
export class PassengerCarCompany extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;

    @Column("character varying",{ name: "image", nullable: true })
    image:string | null;

    @Column("character varying",{ name: "description", nullable: true })
    description:string | null;
}

export default PassengerCarCompany;