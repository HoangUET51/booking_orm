import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Trip from "./Trip";

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

    @OneToMany(()=> Trip,(trip)=>trip.toStation)
    trips:Trip[];

    @OneToMany(()=> Trip,(trip)=>trip.froStation)
    trips1:Trip[];
}

export default Station;