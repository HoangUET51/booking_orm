import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Trip from "./Trip";

@Index("ticket_pkey",["id"], {unique:true})
@Entity("ticket",{schema:"public"})
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ManyToOne(()=>User,(user)=>user.tickets)
    @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
    user:User;

    @ManyToOne(()=>Trip,(trip)=>trip.tickets)
    @JoinColumn([{ name: "trip_id", referencedColumnName:"id"}])
    trip:Trip;
}

export default Ticket;