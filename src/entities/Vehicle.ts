import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PassengerCarCompany from "./PassengerCarCompany";
import Seate from "./Seate";

@Index("vehicle_pkey",["id"], {unique:true})
@Entity("vehicle",{schema:"public"})
export class Vehicle extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;

    @OneToMany(() => Seate,(seate)=>seate.vehicle)
    seates:Seate[]

    @ManyToOne(()=> PassengerCarCompany,(passengerCarCompany)=>passengerCarCompany.vehicles)
    @JoinColumn([{ name: "passengerCarCompany_id", referencedColumnName:"id"}])
    passengerCarCompany:PassengerCarCompany


}

export default Vehicle;