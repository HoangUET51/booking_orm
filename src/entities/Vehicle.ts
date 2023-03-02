import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("vehicle_pkey",["id"], {unique:true})
@Entity("vehicle",{schema:"public"})
export class Vehicle extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;
}

export default Vehicle;