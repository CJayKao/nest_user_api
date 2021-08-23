
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import * as Sequelize from 'Sequelize'
@Table({
    tableName: 'user'
})
export class User extends Model {
    @Column({ primaryKey: true, type: Sequelize.BIGINT, autoIncrement: true })
    id: number;

    @Column({ allowNull: true, defaultValue: '', type: Sequelize.TEXT })
    name: string;

    @Column({ allowNull: false, defaultValue: 0, type: Sequelize.BIGINT })
    amount: number;
}
