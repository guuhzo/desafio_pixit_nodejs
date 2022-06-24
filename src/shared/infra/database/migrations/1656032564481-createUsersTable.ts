import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class createUsersTable1656032564481 implements MigrationInterface {
    name = 'createUsersTable1656032564481'
    
    /**
     * Estrutura para criar a tabela de usuários
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: false
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: false
                }
            ]
        }))
    }


    /**
     * Estrutura para deletar a tabela de usuários
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
