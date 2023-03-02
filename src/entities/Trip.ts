import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("trip_pkey",["id"], {unique:true})
@Entity("trip",{schema:"public"})
export class Trip extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "price", nullable: true })
    price:string | null;

    @Column("timestamp without time zone",{ name: "startTime", nullable: true })
    startTime:Date | null;
}

export default Trip;