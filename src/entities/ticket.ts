import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index,PrimaryGeneratedColumn } from "typeorm";

@Index("ticket_pkey",["id"], {unique:true})
@Entity("ticket",{schema:"public"})
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;
}

export default Ticket;