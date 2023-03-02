import  BaseEntity from "../base/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("seate_pkey",["id"], {unique:true})
@Entity("seate",{schema:"public"})
export class Seate extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("character varying",{ name: "name", nullable: true })
    name:string | null;

    @Column("character varying",{ name: "status", nullable: true })
    status:string | null;
}

export default Seate;