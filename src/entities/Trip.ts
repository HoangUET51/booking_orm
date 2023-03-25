import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Ticket from "./ticket";
import Station from "./Station";
import PassengerCarCompany from "./PassengerCarCompany";

@Index("trip_pkey",["id"], {unique:true})
@Entity("trip",{schema:"public"})
export class Trip extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "price", nullable: true })
    price:string | null;

    @Column("timestamp without time zone",{ name: "startTime", nullable: true })
    startTime:Date | null;

    @OneToMany(()=>Ticket,(ticket)=>ticket.trip)
    tickets:Ticket[];

    @OneToMany(()=> PassengerCarCompany,(passengerCarCompany)=>passengerCarCompany.trip)
    passengerCarCompanys:PassengerCarCompany[];

    @ManyToOne(()=>Station, (station)=>station.trips)
    @JoinColumn([{ name: "toStation_id", referencedColumnName:"id"}])
    toStation:Station

    @ManyToOne(()=>Station, (station)=>station.trips1)
    @JoinColumn([{ name: "froStaion_id", referencedColumnName:"id"}])
    froStation:Station
}

export default Trip;