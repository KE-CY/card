import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    product: string

    @Column()
    price: number

    @Column()
    introduction: string
}