import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Trip from "./Trip";
import Vehicle from "./Vehicle";

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

    @OneToMany(()=>Vehicle,(vehicle)=>vehicle.passengerCarCompany)
    vehicles:Vehicle[];

    @ManyToOne(()=>Trip, (trip)=>trip.passengerCarCompanys)
    @JoinColumn([{ name: "trip_id", referencedColumnName:"id"}])
    trip:Trip;

    
}

export default PassengerCarCompany;