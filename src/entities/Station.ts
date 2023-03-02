import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("station_pkey",["id"], {unique:true})
@Entity("station",{schema:"public"})
export class Station extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;

    @Column("character varying",{ name: "address", nullable: true })
    address:string | null;

    @Column("character varying",{ name: "province", nullable: true })
    province:string | null;

}

export default Station;